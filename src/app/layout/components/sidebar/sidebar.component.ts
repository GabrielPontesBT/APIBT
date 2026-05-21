/**
 * sidebar.component.ts
 *
 * Renderiza el árbol de navegación de la documentación, detecta la ruta activa,
 * mantiene siempre abierta la rama del documento actual y permite abrir o cerrar
 * carpetas con política de una sola carpeta abierta por nivel.
 *
 * La animación de apertura/cierre se delega al CSS, y el centrado del nodo
 * espera a que el layout termine de estabilizarse para que el scroll se sienta
 * más natural y fluido.
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { NavigationNode } from '../../../core/models/navigation-node.model';
import { NavigationService } from '../../../features/api-docs/services/navigation.service';
import { VersionService, VALID_VERSIONS } from '../../../core/services/version.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidebarContainer')
  sidebarContainer!: ElementRef<HTMLElement>;

  @HostBinding('class.collapsed')
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  navigationTree: NavigationNode[] = [];
  activeSlug = '';
  activeVersion = '';

  /**
   * Carpetas abiertas manualmente por el usuario.
   */
  expandedFolders = new Set<string>();

  /**
   * Carpetas que forman parte del camino hacia el documento activo.
   */
  activePathSlugs = new Set<string>();

  private destroy$ = new Subject<void>();
  private scrollAnimationFrameId: number | null = null;

  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private versionService: VersionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.activeVersion = versionService.activeVersion;
  }

  ngOnInit(): void {
    this.versionService.activeVersion$.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.activeVersion = v;
      this.cdr.markForCheck();
    });

    this.updateActiveSlug(this.router.url);
    this.loadNavigation();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        const navigationEndEvent = event as NavigationEnd;

        this.updateActiveSlug(navigationEndEvent.urlAfterRedirects);
        this.rebuildActivePath();

        this.cdr.markForCheck();
        this.scrollToActiveNode();
      });
  }

  ngAfterViewInit(): void {
    this.scrollToActiveNode();
  }

  ngOnDestroy(): void {
    if (this.scrollAnimationFrameId !== null) {
      cancelAnimationFrame(this.scrollAnimationFrameId);
      this.scrollAnimationFrameId = null;
    }

    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByNode(index: number, node: NavigationNode): string {
    return `${node.type}-${node.slug}`;
  }

  isFolder(node: NavigationNode): boolean {
    return node.type === 'folder';
  }

  isFile(node: NavigationNode): boolean {
    return node.type === 'file';
  }

  hasChildren(node: NavigationNode): boolean {
    return Array.isArray(node.children) && node.children.length > 0;
  }

  isNodeActive(node: NavigationNode): boolean {
    return this.isFile(node) && this.activeSlug === node.slug;
  }

  isFolderInActivePath(node: NavigationNode): boolean {
    return this.isFolder(node) && this.activePathSlugs.has(node.slug);
  }

  isExpanded(node: NavigationNode): boolean {
    if (!this.isFolder(node)) {
      return false;
    } else {
      return this.expandedFolders.has(node.slug) || this.activePathSlugs.has(node.slug);
    }
  }

  getFolderIcon(node: NavigationNode): string {
    return this.isExpanded(node) ? 'expand_more' : 'chevron_right';
  }

  private readonly FLAG_MAP: Record<string, string> = {
    'AR': '\u{1F1E6}\u{1F1F7}',
    'BR': '\u{1F1E7}\u{1F1F7}',
    'CL': '\u{1F1E8}\u{1F1F1}',
    'CO': '\u{1F1E8}\u{1F1F4}',
    'MX': '\u{1F1F2}\u{1F1FD}',
    'PE': '\u{1F1F5}\u{1F1EA}',
    'UY': '\u{1F1FA}\u{1F1FE}',
    'PY': '\u{1F1F5}\u{1F1FE}',
    'BO': '\u{1F1E7}\u{1F1F4}',
    'EC': '\u{1F1EA}\u{1F1E8}',
    'VE': '\u{1F1FB}\u{1F1EA}',
    'PA': '\u{1F1F5}\u{1F1E6}',
    'CR': '\u{1F1E8}\u{1F1F7}',
    'GT': '\u{1F1EC}\u{1F1F9}',
    'HN': '\u{1F1ED}\u{1F1F3}',
    'SV': '\u{1F1F8}\u{1F1FB}',
    'NI': '\u{1F1F3}\u{1F1EE}',
    'DO': '\u{1F1E9}\u{1F1F4}',
    'CU': '\u{1F1E8}\u{1F1FA}',
    'PR': '\u{1F1F5}\u{1F1F7}',
    'US': '\u{1F1FA}\u{1F1F8}',
  };

  /**
   * Devuelve el emoji de bandera si el slug es de primer nivel y termina
   * en un código ISO 3166-1 alpha-2 conocido (ej: "argentina-ar" → 🇦🇷).
   * Devuelve null si no aplica.
   */
  getFlagEmoji(node: NavigationNode): string | null {
    if (node.slug.includes('/')) { return null; }
    const match = node.slug.match(/-([a-z]{2})$/i);
    if (!match) { return null; }
    const code = match[1].toUpperCase();
    return this.FLAG_MAP[code] ?? null;
  }

  /**
   * Devuelve el código ISO 2 en minúsculas para usar con flag-icons
   * (ej: "argentina-ar" → "ar"), o null si no aplica.
   */
  getFlagCode(node: NavigationNode): string | null {
    if (node.slug.includes('/')) { return null; }
    const match = node.slug.match(/-([a-z]{2})$/i);
    if (!match) { return null; }
    const code = match[1].toUpperCase();
    return this.FLAG_MAP[code] ? match[1].toLowerCase() : null;
  }

  /**
   * Devuelve el label limpio del nodo, quitando el sufijo de código de país
   * si corresponde (ej: "Argentina AR" → "Argentina").
   */
  getNodeLabel(node: NavigationNode): string {
    if (this.getFlagCode(node)) {
      return node.label.replace(/\s+[A-Z]{2}$/, '').trim();
    }
    return node.label;
  }

  toggleFolder(node: NavigationNode, siblings: NavigationNode[] = []): void {
    if (!this.isFolder(node)) {
      return;
    } else {
      const isExpanded = this.isExpanded(node);

      if (isExpanded) {
        // Colapsar: sacar de ambos sets para que el usuario siempre pueda cerrar
        this.collapseBranch(node);
        this.activePathSlugs.delete(node.slug);
      } else {
        this.closeSiblingFolders(siblings, node.slug);
        this.expandedFolders.add(node.slug);
      }

      this.cdr.markForCheck();

      if (!isExpanded) {
        this.scrollToNodeAfterTransition(node.slug);
      } else {
        this.scrollToNodeCenteredAfterLayout(node.slug, 0);
      }
    }
  }

  private loadNavigation(): void {
    this.navigationService.getNavigationTree()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tree) => {
          this.navigationTree = tree;
          this.rebuildActivePath();
          this.cdr.markForCheck();
          this.scrollToActiveNode();
        },
        error: (error) => {
          console.error('Error cargando sidebar.json', error);
        }
      });
  }

  private updateActiveSlug(url: string): void {
    this.activeSlug = this.normalizeUrlToSlug(url);
  }

  private normalizeUrlToSlug(url: string): string {
    try {
      url = decodeURIComponent(url);
    } catch {
      // si la URL está malformada se usa tal cual
    }
    const path = String(url || '')
      .split('?')[0]
      .split('#')[0]
      .replace(/^\/+/, '')
      .replace(/\/+$/, '');

    // Stripear el prefijo de versión: /v4/authenticate/autenticacion → authenticate/autenticacion
    const firstSlash = path.indexOf('/');
    if (firstSlash !== -1) {
      const prefix = path.substring(0, firstSlash) as any;
      if (VALID_VERSIONS.includes(prefix)) {
        return path.substring(firstSlash + 1);
      }
    }
    return path;
  }

  private rebuildActivePath(): void {
    this.activePathSlugs.clear();

    const activePath = this.findPathToSlug(this.navigationTree, this.activeSlug);

    activePath.forEach((slug) => {
      this.activePathSlugs.add(slug);
    });

    this.expandedFolders.forEach((slug) => {
      if (this.activePathSlugs.has(slug)) {
        this.expandedFolders.delete(slug);
      } else {
        // No hacer nada
      }
    });
  }

  private findPathToSlug(
    nodes: NavigationNode[],
    targetSlug: string,
    parentPath: string[] = []
  ): string[] {
    for (const node of nodes) {
      if (this.isFile(node)) {
        if (node.slug === targetSlug) {
          return parentPath;
        }
      } else {
        const currentPath = [...parentPath, node.slug];
        if (node.slug === targetSlug) {
          return currentPath;
        }
        const result = this.findPathToSlug(node.children || [], targetSlug, currentPath);
        if (result.length > 0) {
          return result;
        }
      }
    }

    return [];
  }

  private closeSiblingFolders(siblings: NavigationNode[], currentSlug: string): void {
    siblings.forEach((sibling) => {
      if (!this.isFolder(sibling) || sibling.slug === currentSlug) {
        return;
      }
      this.clearActivePathForBranch(sibling);
      this.collapseBranch(sibling);
    });
  }

  private clearActivePathForBranch(node: NavigationNode): void {
    this.activePathSlugs.delete(node.slug);
    (node.children || []).forEach((child) => {
      if (this.isFolder(child)) {
        this.clearActivePathForBranch(child);
      }
    });
  }

  private collapseBranch(node: NavigationNode): void {
    if (this.isFolderInActivePath(node)) {
      return;
    } else {
      this.expandedFolders.delete(node.slug);

      if (this.hasChildren(node)) {
        (node.children || []).forEach((child) => {
          if (this.isFolder(child)) {
            this.collapseBranch(child);
          } else {
            // No hacer nada
          }
        });
      } else {
        // No hacer nada
      }
    }
  }

  private scrollToActiveNode(): void {
    this.runAfterSidebarLayout(120, () => {
      const container = this.sidebarContainer?.nativeElement;

      if (!container) {
        return;
      } else {
        const activeElement = container.querySelector('.sidebar-file.active') as HTMLElement | null;

        if (!activeElement) {
          return;
        } else {
          const containerRect = container.getBoundingClientRect();
          const elementRect   = activeElement.getBoundingClientRect();
          const isVisible     = elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom;

          if (!isVisible) {
            this.scrollElementToCenter(container, activeElement);
          }
        }
      }
    });
  }

  private scrollToNodeCenteredAfterLayout(slug: string, delay = 0): void {
    this.runAfterSidebarLayout(delay, () => {
      const container = this.sidebarContainer?.nativeElement;

      if (!container) {
        return;
      } else {
        const nodeElement = container.querySelector(`[data-slug="${slug}"]`) as HTMLElement | null;

        if (!nodeElement) {
          return;
        } else {
          this.scrollFolderIntoView(container, nodeElement);

          try {
            nodeElement.focus({ preventScroll: true });
          } catch {
            nodeElement.focus();
          }
        }
      }
    });
  }

  private scrollToNodeAfterTransition(slug: string): void {
    const container = this.sidebarContainer?.nativeElement;
    if (!container) { return; }

    const nodeElement = container.querySelector(`[data-slug="${slug}"]`) as HTMLElement | null;
    if (!nodeElement) { return; }

    // Find the .sidebar-children sibling that will expand
    const childrenEl = nodeElement.nextElementSibling as HTMLElement | null;
    const target = childrenEl?.classList.contains('sidebar-children') ? childrenEl : null;

    if (target) {
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== 'grid-template-rows') { return; }
        target.removeEventListener('transitionend', onEnd);
        this.runAfterPaint(() => this.scrollFolderIntoView(container, nodeElement));
      };
      target.addEventListener('transitionend', onEnd);
    } else {
      this.runAfterPaint(() => this.scrollFolderIntoView(container, nodeElement));
    }
  }

  private runAfterPaint(callback: () => void): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.scrollAnimationFrameId !== null) {
      cancelAnimationFrame(this.scrollAnimationFrameId);
    }
    this.scrollAnimationFrameId = requestAnimationFrame(() => {
      this.scrollAnimationFrameId = requestAnimationFrame(() => {
        callback();
        this.scrollAnimationFrameId = null;
      });
    });
  }

  private runAfterSidebarLayout(delay: number, callback: () => void): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.setTimeout(() => {
      if (this.scrollAnimationFrameId !== null) {
        cancelAnimationFrame(this.scrollAnimationFrameId);
      }

      this.scrollAnimationFrameId = requestAnimationFrame(() => {
        this.scrollAnimationFrameId = requestAnimationFrame(() => {
          callback();
          this.scrollAnimationFrameId = null;
        });
      });
    }, delay);
  }

  /**
   * Scroll mínimo necesario al expandir una carpeta:
   * - Si el folder + su contenido expandido cabe en el sidebar → no mover nada si ya es visible,
   *   o scrollear lo mínimo para mostrar desde el top del folder hacia abajo.
   * - Si el contenido es más grande que el sidebar → alinear el top del folder al top del container.
   * - En ningún caso centra el elemento, evitando saltos innecesarios.
   */
  private scrollFolderIntoView(container: HTMLElement, folderEl: HTMLElement): void {
    const containerRect = container.getBoundingClientRect();

    // Buscar el .sidebar-children--expanded inmediatamente después del folder
    const parentItem = folderEl.closest('.sidebar-item') as HTMLElement | null;
    const childrenEl = parentItem?.querySelector(':scope > .sidebar-children--expanded') as HTMLElement | null;

    const folderRect = folderEl.getBoundingClientRect();
    const bottomEl = childrenEl ?? folderEl;
    const bottomRect = bottomEl.getBoundingClientRect();

    const topRelative    = folderRect.top  - containerRect.top;   // puede ser negativo
    const bottomRelative = bottomRect.bottom - containerRect.top;
    const contentHeight  = bottomRect.bottom - folderRect.top;

    // Ya es completamente visible → no hacer nada
    if (topRelative >= 0 && bottomRelative <= containerRect.height) {
      return;
    }

    const currentScrollTop = container.scrollTop;
    const folderOffsetTop  = folderRect.top - containerRect.top + currentScrollTop;

    let targetScrollTop: number;

    if (contentHeight >= containerRect.height) {
      // El contenido es más alto que el sidebar → alinear top del folder al top del container
      targetScrollTop = folderOffsetTop;
    } else {
      // Cabe todo → scrollear lo mínimo para que quepa desde el folder hacia abajo
      const overflow = bottomRelative - containerRect.height;
      if (overflow > 0) {
        // Sobresale por abajo → subir lo justo, pero sin ocultar el top del folder
        targetScrollTop = Math.max(folderOffsetTop, currentScrollTop + overflow);
      } else {
        // Está por encima del viewport → bajar para mostrar el top del folder
        targetScrollTop = folderOffsetTop;
      }
    }

    const maxScrollTop = container.scrollHeight - container.clientHeight;
    container.scrollTo({
      top: Math.max(0, Math.min(targetScrollTop, maxScrollTop)),
      behavior: 'smooth'
    });
  }

  private scrollElementToCenter(container: HTMLElement, element: HTMLElement): void {
    const containerRect = container.getBoundingClientRect();
    const elementRect   = element.getBoundingClientRect();

    const currentScrollTop        = container.scrollTop;
    const offsetTopInsideContainer = elementRect.top - containerRect.top + currentScrollTop;
    const targetScrollTop          =
      offsetTopInsideContainer - (container.clientHeight / 2) + (element.offsetHeight / 2);

    const maxScrollTop = container.scrollHeight - container.clientHeight;
    container.scrollTo({
      top: Math.max(0, Math.min(targetScrollTop, maxScrollTop)),
      behavior: 'smooth'
    });
  }
}

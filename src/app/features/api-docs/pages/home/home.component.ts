import { Component, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { take } from 'rxjs';
import { VersionService, VersionId } from '../../../../core/services/version.service';
import { ReleasesService } from '../../services/releases.service';

const V4_DEFAULT_SLUG = 'authenticate/authenticate';

interface HomeDocItem {
  title: string;
  description: string;
  versionId: VersionId;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false,
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('250ms ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('150ms ease-in', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class HomeComponent {

  @HostBinding('@fade') fade = true;

  readonly newsItems: string[] = [
    'Rediseño completo de la interfaz con un diseño más moderno e intuitivo.',
    'Barra de búsqueda rediseñada, optimizando la exploración del contenido.',
    'Asistente IA disponible para las versiones V2R2, V2R3 y V3R1, preparado para responder consultas básicas sobre los servicios disponibles.',
    'Nuevo listado de Releases anteriores que permite acceder fácilmente al historial de versiones y consultar los cambios introducidos en cada uno.',
    'Release Mayo 2026: se incorporan nuevos servicios al catálogo.',
  ];

  private readonly allDocs: HomeDocItem[] = [
    {
      title: 'V2R2',
      versionId: 'v2r2',
      description: 'Documentación del API Banking correspondiente a Bantotal V2R2.'
    },
    {
      title: 'V2R3',
      versionId: 'v2r3',
      description: 'Documentación del API Banking correspondiente a Bantotal V2R3.'
    },
    {
      title: 'V3R1',
      versionId: 'v3r1',
      description: 'Documentación del API Banking correspondiente a Bantotal V3R1.'
    },
    {
      title: 'BPay',
      versionId: 'bpay',
      description: 'Documentación del API Banking correspondiente a las integraciones de los diversos medios de pagos existentes en cada plaza.'
    },
    {
      title: 'G4',
      versionId: 'g4',
      description: 'Documentación del API Banking correspondiente a Bantotal 4ta generación.'
    }
  ];

  get docs(): HomeDocItem[] {
    const showV4 = isPlatformBrowser(this.platformId);
    return showV4 ? this.allDocs : this.allDocs.filter(d => d.versionId !== 'g4');
  }

  constructor(
    private versionService: VersionService,
    private releasesService: ReleasesService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  selectVersion(versionId: VersionId): void {
    this.versionService.setVersion(versionId);

    if (versionId === 'g4') {
      this.router.navigateByUrl(`/g4/${V4_DEFAULT_SLUG}`);
    } else {
      this.releasesService.getReleases().pipe(take(1)).subscribe(releases => {
        if (releases[0]) this.router.navigate([versionId, 'releases', releases[0].id]);
      });
    }
  }


}

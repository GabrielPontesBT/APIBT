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

  private readonly allDocs: HomeDocItem[] = [
    {
      title: 'V2R2',
      versionId: 'v2r2',
      description: 'Documentación del API Banking correspondiente a Bantotal V2R2, ahora presentada con una interfaz moderna y estructurada. Contiene mas de 650 métodos disponibles y nuevas funcionalidades incorporadas en el Release M2026.'
    },
    {
      title: 'V2R3',
      versionId: 'v2r3',
      description: 'Documentación del API Banking correspondiente a Bantotal V2R3, actualizada con una visualización clara y diferenciada con respecto a V2R2. Contiene mas de 650 métodos disponibles y nuevas funcionalidades incorporadas en el Release M2026.'
    },
    {
      title: 'V3R1',
      versionId: 'v3r1',
      description: 'Documentación del API Banking correspondiente a Bantotal V3R1. Contiene más de 700 métodos disponibles, el asistente virtual de Bantotal y nuevas funcionalidades incorporadas en el Release M2026.'
    },
    {
      title: 'V4',
      versionId: 'v4',
      description: 'Documentación del API Banking correspondiente a Bantotal V4.'
    },
    {
      title: 'BPay',
      versionId: 'bpay',
      description: 'En esta documentación se detallan todas las integraciones de los diversos medios de pagos existentes en cada plaza.'
    }
  ];

  get docs(): HomeDocItem[] {
    const showV4 = isPlatformBrowser(this.platformId);
    return showV4 ? this.allDocs : this.allDocs.filter(d => d.versionId !== 'v4');
  }

  constructor(
    private versionService: VersionService,
    private releasesService: ReleasesService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  selectVersion(versionId: VersionId): void {
    this.versionService.setVersion(versionId);

    if (versionId === 'v4') {
      this.router.navigateByUrl(`/v4/${V4_DEFAULT_SLUG}`);
    } else {
      this.releasesService.getReleases().pipe(take(1)).subscribe(releases => {
        if (releases[0]) this.router.navigate([versionId, 'releases', releases[0].id]);
      });
    }
  }


}

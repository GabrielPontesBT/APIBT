import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { take } from 'rxjs';
import { VersionService, VersionId } from '../../../../core/services/version.service';
import { ReleasesService } from '../../services/releases.service';

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

  docs: HomeDocItem[] = [
    {
      title: 'V2R2',
      versionId: 'v2r2',
      description: 'Documentacion del API Banking correspondiente a Bantotal V2R2, ahora presentada con una interfaz moderna y estructurada. Contiene mas de 650 metodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V2R3',
      versionId: 'v2r3',
      description: 'Documentacion del API Banking correspondiente a Bantotal V2R3, actualizada con una visualizacion clara y diferenciada con respecto a V2R2. Contiene mas de 650 metodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V3R1',
      versionId: 'v3r1',
      description: 'Documentacion del API Banking correspondiente a Bantotal V3R1. Contiene mas de 650 metodos disponibles, el asistente virtual de Bantotal y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V4R1',
      versionId: 'v4r1',
      description: 'Documentacion del API Banking correspondiente a Bantotal V4R1.'
    },
    {
      title: 'BPay',
      versionId: 'bpay',
      description: 'En esta documentacion se detallan todas las integraciones de los diversos medios de pagos existentes en cada plaza.'
    }
  ];

  constructor(
    private versionService: VersionService,
    private releasesService: ReleasesService,
    private router: Router
  ) {}

  selectVersion(versionId: VersionId): void {
    this.versionService.setVersion(versionId);

    if (versionId === 'bpay') {
      this.router.navigate(['readme']);
    } else {
      this.releasesService.getReleases().pipe(take(1)).subscribe(releases => {
        if (releases[0]) this.router.navigate(['releases', releases[0].id]);
      });
    }
  }


}

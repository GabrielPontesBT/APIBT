import { Component, HostBinding, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface HomeDocItem {
  title: string;
  description: string;
  link: string;
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
export class HomeComponent implements OnInit {

  @HostBinding('@fade') fade = true;

  docs: HomeDocItem[] = [
    {
      title: 'V2R2',
      link: '/V2R2',
      description: 'Documentacion del API Banking correspondiente a Bantotal V2R2, ahora presentada con una interfaz moderna y estructurada. Contiene mas de 650 metodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V2R3',
      link: '/V2R3',
      description: 'Documentacion del API Banking correspondiente a Bantotal V2R3, actualizada con una visualizacion clara y diferenciada con respecto a V2R2. Contiene mas de 650 metodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V3R1',
      link: '/releases',
      description: 'Documentacion del API Banking correspondiente a Bantotal V3R1. Contiene mas de 650 metodos disponibles, el asistente virtual de Bantotal y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'BPay',
      link: '/BPay',
      description: 'En esta documentacion se detallan todas las integraciones de los diversos medios de pagos existentes en cada plaza.'
    }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // La animación push la maneja el Router Service global
  }
}

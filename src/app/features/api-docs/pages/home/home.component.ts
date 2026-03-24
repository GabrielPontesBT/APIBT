import { Component } from '@angular/core';

interface HomeDocItem {
  title: string;
  description: string;
  link: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  docs: HomeDocItem[] = [
    {
      title: 'V2R2',
      link: '/V2R2',
      description:
        'Documentación del API Banking correspondiente a Bantotal V2R2, ahora presentada con una interfaz moderna y estructurada. Contiene más de 650 métodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V2R3',
      link: '/V2R3',
      description:
        'Documentación del API Banking correspondiente a Bantotal V2R3, actualizada con una visualización clara y diferenciada con respecto a V2R2. Contiene más de 650 métodos disponibles y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'V3R1',
      link: '/Novedades',
      description:
        'Documentación del API Banking correspondiente a Bantotal V3R1. Contiene más de 650 métodos disponibles, el asistente virtual de Bantotal y nuevas funcionalidades incorporadas en el Release M2025.'
    },
    {
      title: 'BPay',
      link: '/BPay',
      description:
        'En esta documentación se detallan todas las integraciones de los diversos medios de pagos existentes en cada plaza.'
    }
  ];
}

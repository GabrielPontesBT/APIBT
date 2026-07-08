import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-backend-config',
    templateUrl: './backend-config.component.html',
    styleUrls: ['./backend-config.component.scss'],
    standalone: false
})
export class BackendConfigComponent {
  @Input() text!: string;
  @Input() title: string = 'Configuración Backend';
  @Input() note: string = '';
  @Input() columns: string[] = ['Campo', 'Valor'];
  @Input() backendData: { titulo: string; datos: any[] }[] = [];
}


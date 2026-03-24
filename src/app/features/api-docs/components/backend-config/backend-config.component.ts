import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-backend-config',
    templateUrl: './backend-config.component.html',
    styleUrls: ['./backend-config.component.scss'],
    standalone: false
})
export class BackendConfigComponent {
  @Input() text!: string; // ya existía
  @Input() backendData: { titulo: string; datos: { Campo: string; Valor: string; }[] }[] = []; // nuevo Input para los grupos
}


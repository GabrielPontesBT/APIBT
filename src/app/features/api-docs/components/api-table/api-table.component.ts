import { Component, Input } from '@angular/core';

@Component({ selector: 'app-api-table', templateUrl: './api-table.component.html', 
  styleUrls: ['./api-table.component.scss'] })

export class ApiTableComponent {
  @Input() columns!: string[];
  @Input() data!: any[];
}

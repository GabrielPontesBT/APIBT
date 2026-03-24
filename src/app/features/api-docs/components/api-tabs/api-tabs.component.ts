import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'app-api-tabs', templateUrl: './api-tabs.component.html', 
  styleUrls: ['./api-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None })
export class ApiTabsComponent {
  @Input() inputCols!: string[];
  @Input() inputData!: any[];
  @Input() outputCols!: string[];
  @Input() outputData!: any[];
  @Input() errorCols!: string[];
  @Input() errors!: any[];
}

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DocApiTab } from '../../../../core/models/doc-page.model';

@Component({
    selector: 'app-api-tabs', templateUrl: './api-tabs.component.html',
    styleUrls: ['./api-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ApiTabsComponent {
  @Input() tabs: DocApiTab[] = [];
}

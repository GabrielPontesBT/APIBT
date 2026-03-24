import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTabsComponent } from './api-tabs.component';

describe('ApiTabsComponent', () => {
  let component: ApiTabsComponent;
  let fixture: ComponentFixture<ApiTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTabsComponent]
    });
    fixture = TestBed.createComponent(ApiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

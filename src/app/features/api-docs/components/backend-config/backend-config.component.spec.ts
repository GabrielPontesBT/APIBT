import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendConfigComponent } from './backend-config.component';

describe('BackendConfigComponent', () => {
  let component: BackendConfigComponent;
  let fixture: ComponentFixture<BackendConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendConfigComponent]
    });
    fixture = TestBed.createComponent(BackendConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

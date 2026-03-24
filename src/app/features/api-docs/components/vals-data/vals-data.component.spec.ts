import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValsDataComponent } from './vals-data.component';

describe('ValsDataComponent', () => {
  let component: ValsDataComponent;
  let fixture: ComponentFixture<ValsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValsDataComponent]
    });
    fixture = TestBed.createComponent(ValsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

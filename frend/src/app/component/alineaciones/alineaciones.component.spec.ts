import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineacionesComponent } from './alineaciones.component';

describe('AlineacionesComponent', () => {
  let component: AlineacionesComponent;
  let fixture: ComponentFixture<AlineacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlineacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdEquipoComponent } from './amd-equipo.component';

describe('AmdEquipoComponent', () => {
  let component: AmdEquipoComponent;
  let fixture: ComponentFixture<AmdEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

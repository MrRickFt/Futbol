import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPartidoComponent } from './detalles-partido.component';

describe('DetallesPartidoComponent', () => {
  let component: DetallesPartidoComponent;
  let fixture: ComponentFixture<DetallesPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

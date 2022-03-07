import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdJugadorComponent } from './amd-jugador.component';

describe('AmdJugadorComponent', () => {
  let component: AmdJugadorComponent;
  let fixture: ComponentFixture<AmdJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

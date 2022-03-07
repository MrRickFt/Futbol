import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorComponent } from './component/jugador/jugador.component';
import { InitComponent } from './component/init/init.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquipoComponent } from './component/equipo/equipo.component';
import { AmdJugadorComponent } from './component/amd-jugador/amd-jugador.component';
import { AmdEquipoComponent } from './component/amd-equipo/amd-equipo.component';
import { PartidoComponent } from './component/partido/partido.component';
import { AlineacionesComponent } from './component/alineaciones/alineaciones.component';
import { DetallesPartidoComponent } from './component/detalles-partido/detalles-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    InitComponent,
    HeaderComponent,
    FooterComponent,
    EquipoComponent,
    AmdJugadorComponent,
    AmdEquipoComponent,
    PartidoComponent,
    AlineacionesComponent,
    DetallesPartidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

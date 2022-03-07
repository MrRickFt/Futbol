import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './component/init/init.component';
import { JugadorComponent } from './component/jugador/jugador.component';

const routes: Routes = [
  

  
  {path: 'inicio', component: InitComponent },
  {
    path: '**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

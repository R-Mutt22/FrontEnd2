import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaFormacionComponent } from './formacion-editable/nueva-formacion.component';

const routes: Routes =[
  { path: 'editforma/:id', component: NuevaFormacionComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

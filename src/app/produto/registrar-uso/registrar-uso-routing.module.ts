import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsoComponent } from './registrar-uso.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarUsoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarUsoRoutingModule { }

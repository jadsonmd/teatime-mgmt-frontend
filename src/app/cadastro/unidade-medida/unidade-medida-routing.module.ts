import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadeMedidaComponent } from './unidade-medida.component';

const routes: Routes = [{
  path: '',
  component: UnidadeMedidaComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadeMedidaRoutingModule { }

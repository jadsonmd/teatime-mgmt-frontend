import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecieProdutoComponent } from './especie-produto.component';

const routes: Routes = [  {
  path: '',
  component: EspecieProdutoComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecieProdutoRoutingModule { }

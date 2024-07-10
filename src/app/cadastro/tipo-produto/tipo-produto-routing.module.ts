import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoComponent } from './tipo-produto.component';

const routes: Routes = [  {
  path: '',
  component: TipoProdutoComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }

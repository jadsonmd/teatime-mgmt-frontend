import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirEstoqueComponent } from './incluir-estoque.component';

const routes: Routes = [
  {
    path: '',
    component: IncluirEstoqueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncluirEstoqueRoutingModule {}

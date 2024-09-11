import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProdutoComponent } from './dashboard-produto.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardProdutoRoutingModule {}

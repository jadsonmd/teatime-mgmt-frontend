import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProdutoComponent } from './dashboard-produto.component';
import { DashboardProdutoRoutingModule } from './dashboard-produto-routing.module';
import { CardDashboardComponent } from '../../component/card-dashboard/card-dashboard.component';
import { CardDashboardModule } from '../../component/card-dashboard/card-dashboard.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [DashboardProdutoComponent],
  imports: [
    CommonModule, 
    DashboardProdutoRoutingModule, 
    CardDashboardModule, 
    MatExpansionModule,
    MatChipsModule
  ],
  exports: [DashboardProdutoComponent],
})
export class DashboardProdutoModule {}

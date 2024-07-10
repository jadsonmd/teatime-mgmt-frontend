import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoComponent } from './tipo-produto.component';


@NgModule({
  declarations: [TipoProdutoComponent],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule
  ]
})
export class TipoProdutoModule { }

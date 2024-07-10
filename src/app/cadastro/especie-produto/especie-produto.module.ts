import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecieProdutoRoutingModule } from './especie-produto-routing.module';
import { EspecieProdutoComponent } from './especie-produto.component';


@NgModule({
  declarations: [EspecieProdutoComponent],
  imports: [
    CommonModule,
    EspecieProdutoRoutingModule
  ]
})
export class EspecieProdutoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaixarEstoqueComponent } from './baixar-estoque.component';
import { BaixarEstoqueRoutingModule } from './baixar-estoque-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProdutoInputModule } from '../../component/produto-input/produto-input.module';

@NgModule({
  declarations: [BaixarEstoqueComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BaixarEstoqueRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    ProdutoInputModule
  ]
})
export class BaixarEstoqueModule {}

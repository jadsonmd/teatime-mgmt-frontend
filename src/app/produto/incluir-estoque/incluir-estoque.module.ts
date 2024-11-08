import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncluirEstoqueComponent } from './incluir-estoque.component';
import { IncluirEstoqueRoutingModule } from './incluir-estoque-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoInputModule } from '../../component/produto-input/produto-input.module';
import { DateMaskDirective } from '../../directives/date-mask.directive';

@NgModule({
  declarations: [IncluirEstoqueComponent, DateMaskDirective],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    IncluirEstoqueRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatButtonModule,
    ProdutoInputModule,
  ],
  providers: [MatDatepickerModule]
})
export class IncluirEstoqueModule { }

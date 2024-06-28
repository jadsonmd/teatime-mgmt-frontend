import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoInputComponent } from './produto-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ ProdutoInputComponent ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule
  ],
  exports: [ ProdutoInputComponent ]
})
export class ProdutoInputModule { }

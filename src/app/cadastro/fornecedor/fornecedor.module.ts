import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorModalComponent } from './fornecedor-modal/fornecedor-modal.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [FornecedorComponent, FornecedorModalComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class FornecedorModule { }

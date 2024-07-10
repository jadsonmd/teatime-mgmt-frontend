import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoComponent } from './tipo-produto.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { TipoProdutoModalComponent } from './tipo-produto-modal/tipo-produto-modal.component';


@NgModule({
  declarations: [TipoProdutoComponent, TipoProdutoModalComponent],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class TipoProdutoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog/transferir-estoque-dialog.component';
import { ReceberEstoqueDialogComponent } from './receber-estoque-dialog/receber-estoque-dialog.component';
import { MatListModule } from '@angular/material/list';
import { HistoricoMovimentacaoItemDialogComponent } from './historico-movimentacao-item-dialog/historico-movimentacao-item-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [EstoqueComponent, TransferirEstoqueDialogComponent, ReceberEstoqueDialogComponent, HistoricoMovimentacaoItemDialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    EstoqueRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class EstoqueModule { }

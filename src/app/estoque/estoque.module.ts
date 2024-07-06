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
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog/transferir-estoque-dialog.component';


@NgModule({
  declarations: [EstoqueComponent, TransferirEstoqueDialogComponent ],
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
    MatSelectModule
  ]
})
export class EstoqueModule { }

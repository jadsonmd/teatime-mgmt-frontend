import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecieProdutoRoutingModule } from './especie-produto-routing.module';
import { EspecieProdutoComponent } from './especie-produto.component';
import { FormsModule } from '@angular/forms';
import { MatTab } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EspecieProdutoModalComponent } from './especie-produto-modal/especie-produto-modal.component';


@NgModule({
  declarations: [EspecieProdutoComponent, EspecieProdutoModalComponent],
  imports: [
    CommonModule,
    EspecieProdutoRoutingModule,
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
export class EspecieProdutoModule { }

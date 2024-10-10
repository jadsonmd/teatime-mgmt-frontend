import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadeMedidaRoutingModule } from './unidade-medida-routing.module';
import { UnidadeMedidaComponent } from './unidade-medida.component';
import { UnidadeMedidaModalComponent } from './unidade-medida-modal/unidade-medida-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [UnidadeMedidaComponent, UnidadeMedidaModalComponent],
  imports: [
    CommonModule,
    UnidadeMedidaRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class UnidadeMedidaModule { }

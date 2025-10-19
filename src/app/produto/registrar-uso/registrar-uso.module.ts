import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarUsoRoutingModule } from './registrar-uso-routing.module';
import { RegistrarUsoComponent } from './registrar-uso.component';
import { ProdutoInputModule } from '../../component/produto-input/produto-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { RegistrarUsoDialogComponent } from './registrar-uso-dialog/registrar-uso-dialog.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CustomPaginatorIntl } from '../../custom/custom-paginator-intl';

@NgModule({
  declarations: [RegistrarUsoComponent, RegistrarUsoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ProdutoInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RegistrarUsoRoutingModule,
  ],
  providers: [MatDatepickerModule, { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class RegistrarUsoModule {}

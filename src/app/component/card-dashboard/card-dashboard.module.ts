import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardDashboardComponent } from './card-dashboard.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CardDashboardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [CardDashboardComponent]
})
export class CardDashboardModule { }

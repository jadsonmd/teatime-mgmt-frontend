import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertMessageComponent } from './alert-message.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlertMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [AlertMessageComponent]
})
export class AlertMessageModule { }

import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.scss'
})
export class AlertMessageComponent {

  snackBarRef = inject(MatSnackBarRef);

}

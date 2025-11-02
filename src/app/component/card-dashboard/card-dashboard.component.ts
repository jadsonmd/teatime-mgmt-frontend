import { I } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-dashboard',
    templateUrl: './card-dashboard.component.html',
    styleUrl: './card-dashboard.component.scss',
    standalone: false
})
export class CardDashboardComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() icon!: string;

}

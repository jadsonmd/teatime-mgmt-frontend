import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SolarSystemModule } from '../component/solar-system/solar-system.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    SolarSystemModule
  ],
})
export class LoginModule { }

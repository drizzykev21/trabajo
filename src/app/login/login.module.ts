import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

=======
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';

>>>>>>> fa16ae5 (segundo)
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    LoginPageRoutingModule
=======
    LoginPageRoutingModule,
>>>>>>> fa16ae5 (segundo)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

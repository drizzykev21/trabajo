import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
<<<<<<< HEAD
import { MatProgressBarModule } from '@angular/material/progress-bar';
=======
>>>>>>> fa16ae5 (segundo)

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    HomePageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
=======
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
>>>>>>> fa16ae5 (segundo)

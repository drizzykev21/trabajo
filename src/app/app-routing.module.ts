import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
=======
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  
    pathMatch: 'full'
  },
  {
    path: 'home',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./home/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./login/forgot/forgot.module').then( m => m.ForgotPageModule)
>>>>>>> fa16ae5 (segundo)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< HEAD
=======
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  


>>>>>>> fa16ae5 (segundo)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

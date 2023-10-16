<<<<<<< HEAD
import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonCard } from '@ionic/angular';
=======
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

>>>>>>> fa16ae5 (segundo)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
<<<<<<< HEAD
export class HomePage {
  constructor(private router: Router) {}

  public mensaje ="Hola"

  user={
    usuario:"",
    password:""
  }

  enviarInformacion() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/login'], navigationExtras);
  }

  mostarConsola(){
    console.log(this.user);
    if(this.user.usuario.length <8 && this.user.password.length <4){
      this.mensaje="Usuario conectado";
    } else{
      this.mensaje ="usuario y contraseña deben tener algun valor"
    }
  }

}
=======
export class HomePage implements OnInit{

  constructor(private router: Router, private auth: AutenticacionService) { }
  public mensaje = ""
  public user = {
    usuario: ""
  }

  ngOnInit() {
    this.user = {
      usuario: this.auth.username
    }
  }

  viaje() {
    this.router.navigate(['/viaje']);
  }

  volver(): string {
    return '/login';
  }
}

>>>>>>> fa16ae5 (segundo)

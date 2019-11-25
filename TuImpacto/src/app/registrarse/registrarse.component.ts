// Angular dependencies
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticationService, TokenPayLoad} from '../authentication.service'
declare var jQuery:any;
declare var $:any;
// Modelo
import {User} from '../models/userModel';
// Servicio
import {UserService} from '../services/userService';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  usuario: User;
  contrasena1: string;
  contrasena2: string;
  constructor(private auth:AuthenticationService,
    private router: Router,
    private usuarioServicio: UserService
  ) { }

  register() {
    console.log('Entro al create');
    console.log('El usuario es:');
    console.log(this.usuario);
    console.log('Contrasena1:');
    console.log(this.contrasena1);
    console.log('Contrasena2:');
    console.log(this.contrasena2);
    if (this.contrasena1 === this.contrasena2) {
      this.usuario.contrasena = this.contrasena1;
      this.usuarioServicio
        .create(this.usuario)
        .then(result => {
          alert('El usuario ha sido creado');
          this.usuario = result;
        })
        .catch(err => alert(`Se ha presentado este ${err}`));
    } else {
      // tslint:disable-next-line: no-unused-expression
      alert('Las contraseñas deben ser iguales');
    }
  }

  public toggleMenu() {
    $('.Menu').slideToggle();
  }
}

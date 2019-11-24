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
    if (this.contrasena1 === this.contrasena2) {
      this.usuario.contrasena = this.contrasena1;
      this.usuarioServicio
        .create(this.usuario)
        .then(result => {
          'El usuario ha sido creado';
            this.usuario = result;
        })
        .catch(err => `Se ha presentado este ${err}`);
    }
    else {
      // tslint:disable-next-line: no-unused-expression
      Message: 'Las contraseñas deben ser iguales';
    }
  }

  public toggleMenu() {
    $('.Menu').slideToggle();
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticationService, TokenPayLoad} from '../authentication.service'
declare var jQuery:any;
declare var $:any;
// Services
import {UserService} from '../services/userService';
// Models
import {User} from '../models/userModel';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent  {
  user: User;
  constructor(private auth:AuthenticationService,
    private router: Router,
    private usuarioServicio: UserService) { }


  login() {
  }
  public toggleMenu(){
    $('.Menu').slideToggle();
}

}

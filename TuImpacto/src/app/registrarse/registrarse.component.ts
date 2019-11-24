import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticationService, TokenPayLoad} from '../authentication.service'
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  credentials: TokenPayLoad = {
    id:0,
    nombre: '',
    apellido: '',
    email: '',
    contraseña:'',
    edad: 0,
    puntos: 0
  }
  constructor(private auth:AuthenticationService, private router: Router) { }

  register(){
    this.auth.register(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/involucrate')
      },
      err => {
        console.log(err)
      }
    )
  }

  public toggleMenu(){
    $('.Menu').slideToggle();
}

}

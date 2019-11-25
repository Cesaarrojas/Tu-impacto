import { Component } from '@angular/core';
import { AuthenticationService, UserDetails} from '../authentication.service';
// Services
import {UserService} from '../services/userService';
// Model
import {User} from '../models/userModel';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  user: User;
  userId: string;
  constructor(private auth: AuthenticationService,
    private userServicio: UserService
  ) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.getUser();
  }

  getUser() {
    this.userServicio.getById(this.userId)
    .then(miUsuario => {
      this.user = miUsuario;
    })
    .catch(err => alert(err));
  }
  public toggleMenu(){
    $('.Menu').slideToggle();
}

}



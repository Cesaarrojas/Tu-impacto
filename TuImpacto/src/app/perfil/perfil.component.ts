import { Component } from '@angular/core';
import { AuthenticationService, UserDetails} from '../authentication.service'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  details: UserDetails
  constructor(private auth: AuthenticationService) { }
  ngOnInit(){
    this.auth.profile().subscribe(
      user=>{
        this.details = user
      },
      err => {
        console.log(err)
      }
    )
  }

}

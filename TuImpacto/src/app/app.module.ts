import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InvolucrateComponent } from './involucrate/involucrate.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


const routes :Route []= [
{path:'', component:InicioComponent},
{path: 'conocenos', component:ConocenosComponent },
{path: 'registrarse', component:RegistrarseComponent },
{path: 'inicio_sesion', component:InicioSesionComponent },
{path: 'involucrate', component:InvolucrateComponent }

];


@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ConocenosComponent,
    InvolucrateComponent,
    FooterComponent,
    HeaderComponent,
    RegistrarseComponent,
    InicioSesionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

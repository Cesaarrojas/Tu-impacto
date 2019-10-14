import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { InvolucrateComponent } from './involucrate/involucrate.component';


const routes :Route []= [
{path:'', component:InicioComponent},
{path: 'conocenos', component:ConocenosComponent },
{path: 'involucrate', component:InvolucrateComponent }
];


@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ConocenosComponent,
    InvolucrateComponent


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

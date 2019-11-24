import { Component, OnInit } from '@angular/core';
import {utils} from 'pixi.js';
declare let jQuery: any;
declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }


  public toggleMenu() {
      $('.Menu').slideToggle();
  }
}


export class bordem {
  showFiller = false;
}

class Image_animation {  
  logoverd() {  
   let obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo2.png";  
  }  
  logoblanc() {  
   let obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo1.png";  
  }  
 }  
  window.onload = () => {
    let greeter = new Image_animation();  
    let obj = < HTMLImageElement > document.getElementById("LogoImg");
    obj.onmouseover = function() {
      greeter.logoverd();
    }  
    obj.onmouseout = function() {
      greeter.logoblanc();
  }  
};

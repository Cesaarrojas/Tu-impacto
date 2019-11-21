import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }


public toggleMenu(){
    $('.Menu').slideToggle();
}
}


export class bordem {
  showFiller = false;
}

class Image_animation {  
  logoverd() {  
   var obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo2.png";  
  }  
  logoblanc() {  
   var obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo1.png";  
  }  
 }  
 window.onload = () => {  
  var greeter = new Image_animation();  
  var obj = < HTMLImageElement > document.getElementById("LogoImg");  
  obj.onmouseover = function() {  
   greeter.logoverd();  
  }  
  obj.onmouseout = function() {  
   greeter.logoblanc();  
  }  
 };



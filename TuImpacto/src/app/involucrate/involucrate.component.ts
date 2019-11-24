import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-involucrate',
  templateUrl: './involucrate.component.html',
  styleUrls: ['./involucrate.component.css']
})
export class InvolucrateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public toggleMenu(){
    $('.Menu').slideToggle();
}

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


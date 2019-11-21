import { Component, OnInit } from '@angular/core';
var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class Image_animation {  
  logoverde() {  
   var obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo2.png";  
  }  
  logoblanco() {  
   var obj = < HTMLImageElement > document.getElementById("LogoImg");  
   obj.src = "assets/Imagenes/Logo1.png";  
  }  
 }  
 window.onload = () => {  
  var greeter = new Image_animation();  
  var obj = < HTMLImageElement > document.getElementById("LogoImg");  
  obj.onmouseover = function() {  
   greeter.logoverde();  
  }  
  obj.onmouseout = function() {  
   greeter.logoblanco();  
  }  
 };

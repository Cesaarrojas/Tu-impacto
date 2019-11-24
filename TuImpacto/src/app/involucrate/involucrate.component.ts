import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
var puntos:number=0;

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
termometro(){
  if(puntos==1){
    console.log('1 punto de termometro');
    var termometroimg = < HTMLImageElement > document.getElementById("termometro");  
    termometroimg.src = "assets/Imagenes/termometro6.png";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(80%) blur(4px)';
  }
  else if(puntos==2){
    console.log('2 punto de termometro');
    var termometroimg = < HTMLImageElement > document.getElementById("termometro");  
    termometroimg.src = "assets/Imagenes/termometro5.png";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(75%) blur(3px)';
  }
  else if(puntos==3){
    console.log('3 punto de termometro');
    var termometroimg = < HTMLImageElement > document.getElementById("termometro");  
    termometroimg.src = "assets/Imagenes/termometro4.png";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(50%) blur(2px)';
  }
  else if(puntos==4){
    console.log('4 punto de termometro');
    var termometroimg = < HTMLImageElement > document.getElementById("termometro");  
    termometroimg.src = "assets/Imagenes/termometro3.png";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(35%) blur(1px)';
  }
  else if(puntos==5){
    console.log('5 punto de termometro');
    var termometroimg = < HTMLImageElement > document.getElementById("termometro");  
    termometroimg.src = "assets/Imagenes/termometro2.png";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(20%) blur(1px)';
  }
  else {
    console.log('6 punto de termometro');
    var objeto = < HTMLImageElement > document.getElementById("base");  
    objeto.innerHTML="¡Muy bien! Con pequeños cambios, generamos grandes impactos, te invitamos a compartir la página para que más gente se una y hagan un impacto.";
    var PLANETA = document.getElementById('PLANETA');
    PLANETA.style.filter = 'grayscale(0%) blur(0px)';
  }
}
info1() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="Intenta conseguir productos de higiene y cuidado personal que no estén envasados en plásticos y de ser posible, hechos en otros materiales";
}
acepto1() {
  var objetoimg = < HTMLImageElement > document.getElementById("Icono1");  
  objetoimg.src = "assets/Imagenes/BotellaV.png";
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="¡GENIAL!";
  puntos = puntos + 1;
  // alert('puntos: '+puntos); 
  this.termometro();
  
}
info2() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="Elige envases para tus bebidas y líquidos que sean retornables, como el vidrio, en lugar de brik y botellas de plástico.";
}
acepto2() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="SÚPER!";
  var objetoimg = < HTMLImageElement > document.getElementById("Icono2");  
  objetoimg.src = "assets/Imagenes/CepilloV.png";
  puntos = puntos + 1;
  // alert('puntos: '+puntos); 
  this.termometro();
}
info3() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="Cambia las bolsas de plástico por otras reutilizables, carros o cestas.";
}
acepto3() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="MUY BIEN!";
  var objetoimg = < HTMLImageElement > document.getElementById("Icono3");  
  objetoimg.src = "assets/Imagenes/BolsaPV.png";
  puntos = puntos + 1;
  // alert('puntos: '+puntos); 
  this.termometro();
}
info4() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="Cambia los tápers de plástico por los de acero inoxidable o vidrio.";
}
acepto4() {
  var objetoimg = < HTMLImageElement > document.getElementById("Icono4");  
  objetoimg.src = "assets/Imagenes/RecipienteV.png";
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="¡GRAN AVANCE!";
  puntos = puntos + 1;
  // alert('puntos: '+puntos);
  this.termometro();
}
info5() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="Di no a las maquinillas de afeitar desechables, cámbialas por una maquinilla eléctrica o bien de metal con cuchillas sustituibles, lo que te permitirá ahorrar mucho dinero.";
}
acepto5() {
  var objetoimg = < HTMLImageElement > document.getElementById("Icono5");  
  objetoimg.src = "assets/Imagenes/MaquinaV.png";
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="¡GENIAL!";
  puntos = puntos + 1;
  // alert('puntos: '+puntos); 
  this.termometro();
}
info6() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="No uses pitillos, vasos, platos y/o cubiertos de plástico cuando estés fuera de casa, es mejor llevar tus propios utensilios.";
}
acepto6() {
  var objetoimg = < HTMLImageElement > document.getElementById("Icono6");  
  objetoimg.src = "assets/Imagenes/PitillosV.png";
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="!SIGUE ASI!";
  puntos = puntos + 1;
  // alert('puntos: '+puntos);
  this.termometro();
}
base() {
  var objeto = < HTMLImageElement > document.getElementById("base");  
  objeto.innerHTML="base";
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


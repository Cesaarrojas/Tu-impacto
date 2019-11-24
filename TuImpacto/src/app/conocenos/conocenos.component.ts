import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public toggleMenu(){
    $('.Menu').slideToggle();
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  myimage:string="assets/img/hanon.jpg"
  myimage1:string="assets/img/hanon1.jpg"
  myimage2:string="assets/img/hanon2.jpg"

}

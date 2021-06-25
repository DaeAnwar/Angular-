import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrasol',
  templateUrl: './carrasol.component.html',
  styleUrls: ['./carrasol.component.scss']
})
export class CarrasolComponent implements OnInit {

  images : Array<String> = [
    "assets/img.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { EventsBlockComponent } from '../../components/events-block/events-block.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollInto(target: HTMLElement){
    console.log(target);
    target.scrollIntoView();
  }

}

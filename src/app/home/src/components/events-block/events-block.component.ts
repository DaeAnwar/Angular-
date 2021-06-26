import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss']
})
export class EventsBlockComponent implements OnInit {

  visibleModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBookTable(){
    this.visibleModal = true;
  }

}

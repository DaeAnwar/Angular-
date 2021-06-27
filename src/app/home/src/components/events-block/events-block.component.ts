import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss']
})
export class EventsBlockComponent implements OnInit {

  visibleModal: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showBookTable(){
    // this.visibleModal = true;
    // if(localStorage.getItem("user-info") == null )
      // this.router.navigateByUrl("/auth/login")
    this.router.navigateByUrl("/home/book/evnetid");
  }

  onCloseModel(){
    this.router.navigateByUrl("/home")
  }
}

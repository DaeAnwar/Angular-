import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss']
})
export class EventsBlockComponent implements OnInit {

  visibleModal: boolean = false;
  baseurl = "";

  constructor(
    private router: Router,
    private eventsSrv: EventsService
  ) {
    this.baseurl = environment.BASE_URL;
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  showBookTable(eventId: number){
    // this.visibleModal = true;
    // if(localStorage.getItem("user-info") == null )
      // this.router.navigateByUrl("/auth/login")
    this.router.navigateByUrl(`/home/book/${eventId}`);
  }

  onCloseModel(){
    this.router.navigateByUrl("/home")
  }

  events : any = [];
  loadEvents(){
    this.eventsSrv.getEvents().subscribe( (res: any) => {
      this.events = res; //["hydra:member"]
    }, err => console.error(err) )
  }
}

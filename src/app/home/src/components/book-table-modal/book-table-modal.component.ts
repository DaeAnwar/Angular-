import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-book-table-modal',
  templateUrl: './book-table-modal.component.html',
  styleUrls: ['./book-table-modal.component.scss']
})
export class BookTableModalComponent implements OnInit {

  bookForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    // firstName: new FormControl(),
  })

  // @Input() visible : boolean = true;
  // @Input() event: any = null;

  @Output("on-close") onCloseModal = new EventEmitter<void>();

  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private eventsSrv: EventsService
  ) { }

  ngOnInit(): void {
    this.actRouter.params.subscribe( params => {
      if(params["eventid"]){
        this.loadEvent(params["eventid"]);
      }
    })
    let data: any = {};
    if(localStorage.getItem("user-info") != null){
      data = localStorage.getItem("user-info");
    data = JSON.parse(data);
  }

    this.bookForm.patchValue(data);
  }

  navBack(){
    this.router.navigateByUrl("/home");
  }

  event: any = null;
  tablee : Array<any> = [];
  loadEvent(id: number){
    this.eventsSrv.getEventById(id).subscribe( (res: any) => {
      this.event = res;
      for(let i=0; i<res.reservation.length; i++){
        this.addTablesFromReservation(res.reservation[i])
      }
    }, err =>  console.error(err));
  }

  addTablesFromReservation(reservationPath: string){
    this.eventsSrv.getReservationById(reservationPath).subscribe( (res:any) => {
      if(res.status == true)
      this.tablee = this.tablee.concat(res.tablee);
    }, err => console.log(err));
  }

  currentReservedTable : Array<string> =  [];
  toggleReservationTable(table: string){
    console.log(table);
    if(this.currentReservedTable.includes(table))
      this.currentReservedTable = this.currentReservedTable.filter( item => item != table);
    else
      this.currentReservedTable.push(table);
  }

  book(){
    // {
    //   "FirstName": "string",
    //   "LastName": "string",
    //   "phoneNumber": "string",
    //   "status": true,
    //   "createdAt": "2021-07-09T22:07:08.678Z",
    //   "event": "string",
    //   "tablee": [
    //     "string"
    //   ],
    //   "firstName": "string",
    //   "lastName": "string"
    // }
    let currentDate = new Date();
    let obj = {
      FirstName: this.bookForm.get('firstName')?.value,
      LastName: this.bookForm.get('lastName')?.value,
      // firstName: this.bookForm.get('firstName')?.value,
      // lastName: this.bookForm.get('lastName')?.value,
      phoneNumber: this.bookForm.get('phoneNumber')?.value,
      status: false,
      // 2021-09-06T00:00:00+02:00
      createdAt: currentDate.getDate()+"/"+this._month(currentDate.getMonth())+"/"+currentDate.getFullYear(),
      event: `/api/events/${this.event.id}`,
      tablee: this.currentReservedTable,
    }
    console.log(obj);
    this.eventsSrv.reserver(obj).subscribe( res => {
      console.log(res);
    }, err => console.error(err));
  }

  _month(month:number){
    if(month<10)
      return '0'+month;
    else
      return month.toString();
  }
}

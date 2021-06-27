import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  @Input() visible : boolean = true;
  @Input() event: any = null;

  @Output("on-close") onCloseModal = new EventEmitter<void>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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





}

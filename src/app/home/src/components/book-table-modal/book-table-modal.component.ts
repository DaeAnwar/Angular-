import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-table-modal',
  templateUrl: './book-table-modal.component.html',
  styleUrls: ['./book-table-modal.component.scss']
})
export class BookTableModalComponent implements OnInit {

  @Input() visible : boolean = false;
  @Input() event: any = null;

  @Output("on-close") onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }



}

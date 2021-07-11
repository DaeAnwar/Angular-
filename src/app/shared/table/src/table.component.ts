import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input("reserved-table") reservedTables : Array<any> = [];
  @Input("currentReservedTable") currentReservedTable : Array<string> = [];
  @Output("toggleReservationTable") toggleReservationTable = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

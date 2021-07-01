import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './src/table.component';
import { TablePlaceComponent } from './src/components/table-place/table-place.component';



@NgModule({
  declarations: [
    TableComponent,
    TablePlaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }

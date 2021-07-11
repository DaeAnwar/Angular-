import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-page-information',
  templateUrl: './page-information.component.html',
  styleUrls: ['./page-information.component.scss']
})
export class PageInformationComponent implements OnInit {

  constructor(
    private infoSrv: InfoService
  ) { }

  ngOnInit(): void {
    this.loadInformation();
  }

  information: any;
  loadInformation(){
    this.infoSrv.getInformation().subscribe( res => {
      this.information = res;
      console.log(this.information)
    }, err => {
      console.error(err);
    })
  }
}

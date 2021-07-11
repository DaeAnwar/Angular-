import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(){
    return this.http.get(`${environment.BASE_URL}/api/events`);
  }
  getEventById(id: number){
    return this.http.get(`${environment.BASE_URL}/api/events/${id}`);
  }

  getReservationById(reservationPath: string){
    return this.http.get(`${environment.BASE_URL}${reservationPath}`)
  }

  reserver(body: any){
    let headers = new HttpHeaders({
      // 'content-type': 'application/ld+json; charset=utf-8',
      // 'accept': 'application/ld+json',
      // 'Accept-Encoding': 'gzip, deflate, br',
      // 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      // 'Connection': 'keep-alive'
    });
    return this.http.post(`${environment.BASE_URL}/api/reservations`,body); // {headers: headers}
  }

}

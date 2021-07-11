import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(
    private http: HttpClient
  ) { }

  getDishes(){
    return this.http.get(`${environment.BASE_URL}/api/dishes`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const apiUrl = 'https://gorest.co.in/public-api/products';

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(apiUrl);
  }

  
}

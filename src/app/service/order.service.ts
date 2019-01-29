import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: any;

  constructor(public http: HttpClient) { }

  getAllOrders(): any {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/order/all').subscribe((data) => {
        observe.next(data);
      });
    });
  }
}

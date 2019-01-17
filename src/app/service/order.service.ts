import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: any

  constructor(public http: HttpClient) { }
 
  getAllOrders() {
    this.http.get('http://localhost:8080/order/all').subscribe((data) => {
      this.orders = data
    })
    return this.orders
  }
}

import { OrderService } from './../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-order',
  templateUrl: './order.component.html',
  styleUrls  : ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: any
  constructor(public orderService: OrderService) {
    this.getAllOrders()
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllOrders()
    }, 100);
  }

  getAllOrders() {
      this.orders = this.orderService.getAllOrders()
  }

}

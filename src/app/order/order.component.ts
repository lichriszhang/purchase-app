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
  }

  ngOnInit() {
    console.log('调用了order')
    setTimeout(() => {
      this.getAllOrders()
    }, 200);
  }

  getAllOrders() {
      this.orders = this.orderService.getAllOrders()
  }

}

import { OrderService } from './../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: any
  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
    console.log('调用了order');
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((data) => {
      this.orders = data;
    });
  }

}

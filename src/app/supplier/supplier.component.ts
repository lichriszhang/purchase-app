import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers: any
  constructor(public supplierservice: SupplierService) {
    this.suppliers = this.supplierservice.getAllSupplier()

  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllSupplier()
    }, 100);
  }

  getAllSupplier() {
    this.suppliers = this.supplierservice.getAllSupplier()
    console.log(this.suppliers)
  }
}

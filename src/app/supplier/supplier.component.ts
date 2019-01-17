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
    this.suppliers = this.supplierservice.getAllEquip()

  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllSupplier()
    }, 1000);
  }

  getAllSupplier() {
    this.suppliers = this.supplierservice.getAllEquip()
    console.log(this.suppliers)
  }
}

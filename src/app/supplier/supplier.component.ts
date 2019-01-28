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
  }

  ngOnInit() {
    console.log('调用了supplier')
    setTimeout(() => {
      this.getAllSupplier()
    }, 200);
  }

  getAllSupplier() {
    this.suppliers = this.supplierservice.getAllSupplier()
  }
  removeSupplier(supplierId: string) {
    let r = confirm('remove this supplier?')
    if(r) {
      this.supplierservice.removeSupplier(supplierId)
      location=location
    }
  }
}

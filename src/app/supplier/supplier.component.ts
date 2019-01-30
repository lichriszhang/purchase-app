import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supplier: any = {
    id: '',
    name: '',
    address: '',
    contacts: '',
    tele: '',
    phone: '',
    fax: '',
    mail: '',
    bank: '',
    equipcate: '',
  };

  suppliers: any;
  constructor(public supplierservice: SupplierService) {
  }

  ngOnInit() {
    this.getAllSupplier();
  }

  getAllSupplier() {
    this.supplierservice.getAllSupplier().subscribe((data) => {
      this.suppliers = data;
    });
  }
  removeSupplier(supplierId: string) {
    if (confirm('remove this supplier?')) {
      this.supplierservice.removeSupplier(supplierId);
      location = location;
    }
  }

  addSupplier() {
    this.supplierservice.addSupplier(this.supplier);
  }

  updateSupplier(supplierId: string) {
    this.supplierservice.updateSupplier(supplierId);
  }
}

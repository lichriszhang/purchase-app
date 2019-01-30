import { CategoryService } from './../service/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-supplier-option',
  templateUrl: './supplier-option.component.html',
  styleUrls: ['./supplier-option.component.scss']
})
export class SupplierOptionComponent implements OnInit {
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
    equipcate: '01',
  };
  allCategory: any;
  constructor(
    public supplierService: SupplierService,
    public routeInfo: ActivatedRoute,
    public categoryservice: CategoryService
    ) { }

  ngOnInit() {
    this.categoryservice.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    });
    this.routeInfo.params.subscribe((param: Params) => {
      if (param['supplierId']) {
        this.supplierService.getSupplierById(param['supplierId']).subscribe((data) => {
          this.supplier = data;
        });
      }
      console.log(this.supplier);
    });
  }

  addSupplier() {
    console.log('add supplier');
    console.log(this.supplier);
    this.routeInfo.params.subscribe((param: Params) => {
      console.log(param['supplierId']);
      if (param['supplierId']) {
        this.updateSupplier();
        return;
      }
      this.supplierService.addSupplier(this.supplier);
    });
  }

  updateSupplier() {
    console.log('update supplier');
    this.supplierService.updateSupplier(this.supplier);
  }
}

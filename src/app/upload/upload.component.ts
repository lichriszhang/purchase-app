import { CategoryService } from './../service/category.service';
import { EquipService } from './../service/equip.service';
import { SupplierService } from './../service/supplier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  equip: any = {
    equipid: '',
    equipname: '',
    equipspec: '',
    equipmodel: '',
    equiptext: '',
    equipnum: 1,
    equipcategory: '01',
  };
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
  file: any;
  allCategory: any;


  constructor(
    public equipservice: EquipService, 
    public categoryservice: CategoryService,
    public supplierService: SupplierService, 
    public routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.categoryservice.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    });
    this.routeInfo.params.subscribe((param: Params) => {
      if(param['equipId']) {
        this.equipservice.getEuqipById(param['equipId']).subscribe((data) => {
          this.equip = data;
        });
      }
    });
  }

  addEquip() {
    if (this.equip.equipname === '' || this.equip.equipnum < 1 || this.equip.equipnum > 10000) {
      alert('please input necessary value');
      return;
    }
    console.log(this.equip);
    this.routeInfo.params.subscribe((param: Params) => {
      if(param['equipId']) {
        this.updateEquip();
        return;
      }
      this.equipservice.addEquipment(this.equip, this.file);
    });
  }

  updateEquip() {
    if (this.equip.equipname === '' || this.equip.equipnum < 1 || this.equip.equipnum > 10000) {
      alert('please input necessary value');
      return;
    }
    console.log(this.equip);
    this.equipservice.updateEquip(this.equip);
  }


  addSupplier() {
    console.log('add supplier');
    console.log(this.supplier);
    // this.supplierService.addSupplier(this.supplier);
  }
}

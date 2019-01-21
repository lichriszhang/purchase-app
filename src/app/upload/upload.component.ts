import { CategoryService } from './../service/category.service';
import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  equip: any = {
    equipname: '',
    equipspec: '',
    equipmodel: '',
    equiptext: '',
    equipnum: 1,
    equipcategory: '01',
  }
  file: any
  allCategory: any


  constructor(public equipservice: EquipService, public categoryservice: CategoryService) { }

  ngOnInit() {
    this.allCategory = this.categoryservice.getAllCategory()
  }

  addEquip() {
    if(this.equip.equipname=='' || this.equip.equipnum<1||this.equip.equipnum>10000) {
      alert('please input necessary value')
      return
    }
    this.equipservice.addEquipment(this.equip)
  }

}

import { CategoryService } from './../service/category.service';
import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  equip: Object = {
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
    console.log(this.file)
    this.equipservice.addEquipment(this.equip, this.file)
  }

}

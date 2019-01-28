import { CategoryService } from './../service/category.service';
import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
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
  }
  file: any
  allCategory: any



  constructor(public equipservice: EquipService, public categoryservice: CategoryService, public routeInfo: ActivatedRoute) { }

  ngOnInit() {
      this.allCategory = this.categoryservice.getAllCategory()
      console.log(this.equip)
      this.routeInfo.params.subscribe((param: Params) => {
        console.log(param["equipId"])
        this.equipservice.getEuqipById(param["equipId"]).subscribe((data) => {
          this.equip = data
        })
      })
  }

  addEquip() {
    if (this.equip.equipname == '' || this.equip.equipnum < 1 || this.equip.equipnum > 10000) {
      alert('please input necessary value')
      return
    }
    this.equipservice.addEquipment(this.equip, this.file)
  }

  updateEquip() {
    if (this.equip.equipname == '' || this.equip.equipnum < 1 || this.equip.equipnum > 10000) {
      alert('please input necessary value')
      return
    }
    this.equipservice.updateEquip(this.equip)
  }

}

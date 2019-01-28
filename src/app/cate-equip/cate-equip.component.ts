import { Component, OnInit } from '@angular/core';
import { EquipService } from '../service/equip.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cate-equip',
  templateUrl: './cate-equip.component.html',
  styleUrls: ['./cate-equip.component.scss']
})
export class CateEquipComponent implements OnInit {

  cateEquips: any
  isShow: any
  constructor(public equipservice: EquipService, public routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((param: Params) => {
      if(param["cateId"]) {
        this.getEquipByCategory()
      } else{
        this.getEquipByName();
      }
    })
  }
  getEquipByCategory() {
      this.routeInfo.params.subscribe((param: Params) => {
        this.equipservice.getEquipByCategory(param["cateId"]).subscribe((data) => {
          this.cateEquips = data
          if(this.cateEquips == undefined || this.cateEquips == null || this.cateEquips.length<1) {
            this.cateEquips = null
          }
        })
      })
  }
  getEquipByName() {
      this.routeInfo.params.subscribe((param: Params) => {
        this.equipservice.getEquipByName(param["equipName"]).subscribe((data) => {
          this.cateEquips = data
          if(this.cateEquips == undefined || this.cateEquips == null || this.cateEquips.length<1) {
            this.cateEquips = null
          }
        })
      })
  }
}

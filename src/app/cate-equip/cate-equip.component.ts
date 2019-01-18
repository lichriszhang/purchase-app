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
    this.routeInfo.params.subscribe((param: Params) => {
      if(param["cateId"]) {
        this.getEquipByCategory()
      } else{
        this.getEquipByName();
      }
    })
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
    setTimeout(() => {
      this.routeInfo.params.subscribe((param: Params) => {
        this.cateEquips = this.equipservice.getEquipByCategory(param["cateId"])
        if(this.cateEquips == undefined || this.cateEquips == null || this.cateEquips.length<1) {
          this.cateEquips = null
        }
      })
    }, 100);
  }
  getEquipByName() {
    setTimeout(() => {
      this.routeInfo.params.subscribe((param: Params) => {
        this.cateEquips = this.equipservice.getEquipByName(param["equipName"])
        if(this.cateEquips == undefined || this.cateEquips == null || this.cateEquips.length<1) {
          this.cateEquips = null
        }
      })
    }, 100);
  }
}

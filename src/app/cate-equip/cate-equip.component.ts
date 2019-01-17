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

  constructor(public equipservice: EquipService, public routeInfo: ActivatedRoute) { 
  }

  ngOnInit() {
    this.cateEquips = this.getEquipByCategory();
  }
  getEquipByCategory() {
    setTimeout(() => {
      this.routeInfo.params.subscribe((param: Params) => {
        console.log(param["cateId"])
        this.cateEquips = this.equipservice.getEquipByCategory(param["cateId"])
        return this.cateEquips
      })
    }, 1000);
  }
}

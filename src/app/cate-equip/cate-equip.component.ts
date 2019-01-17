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
    this.getEquipByCategory()
  }

  ngOnInit() {
      this.getEquipByCategory()
  }
  getEquipByCategory() {
    setTimeout(() => {
      this.routeInfo.params.subscribe((param: Params) => {
        this.cateEquips = this.equipservice.getEquipByCategory(param["cateId"])
      })
    }, 1000);
  }
}

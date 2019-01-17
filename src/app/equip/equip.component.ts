import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {

  equip: any

  constructor(public equipservice: EquipService, public routeInfo: ActivatedRoute) {
    this.equip = this.equipservice.getAllEquip()
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllEquip()
    }, 1000);
  }

  getAllEquip() {
    this.equip = this.equipservice.getAllEquip()
  }

  getEquipByCategory() {
    setTimeout(() => {
      this.routeInfo.params.subscribe((param: Params) => {
        console.log(param)
      })
    }, 1000);
  }
}

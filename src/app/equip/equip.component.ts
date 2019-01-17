import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {

  equip: any

  constructor(public equipservice: EquipService) {
    this.equip = this.equipservice.getAllEquip()

  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllEquip()
    }, 1000);
  }

  getAllEquip() {
    this.equip = this.equipservice.getAllEquip()
    console.log(this.equip)
  }

}

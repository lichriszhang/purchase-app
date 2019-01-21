import { EquipService } from './../service/equip.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {

  equip: any
  cateEquips: any

  constructor(public equipservice: EquipService) {
    this.getAllEquip()
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllEquip()
    }, 100);
  }

  getAllEquip() {
    this.equip = this.equipservice.getAllEquip()
  }
  removeEquip(equipId: string) {
    let r = confirm('remove this equipment?')
    if (r == true) {
      this.equipservice.removeEquip(equipId)
      location=location
    }
  }



}

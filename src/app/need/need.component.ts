import { ActivatedRoute, Params } from '@angular/router';
import { NeedService } from './../service/need.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-need',
  templateUrl: './need.component.html',
  styleUrls  : ['./need.component.scss']
})
export class NeedComponent implements OnInit {

  needs: any
  needDetail: any
  row: number
  constructor(public needService: NeedService, public routeInfo: ActivatedRoute) {
    this.getAllNeeds()
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllNeeds()
    }, 100);
  }

  getAllNeeds() {
      this.needs = this.needService.getAllNeeds()
  }

  getNeedDetail() {
    this.routeInfo.params.subscribe((param: Params) => {
      this.needDetail = this.needService.getNeedDetail(param["needId"]);
    })
  }
}

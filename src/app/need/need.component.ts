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
  }

  ngOnInit() {
    console.log('调用了Need');
    this.getAllNeeds();
  }

  getAllNeeds() {
    this.needService.getAllNeeds().subscribe((data) => {
      this.needs = data;
    });
  }

  getNeedDetail() {
    this.routeInfo.params.subscribe((param: Params) => {
      this.needDetail = this.needService.getNeedDetail(param["needId"]);
    })
  }
}

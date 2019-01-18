import { ActivatedRoute, Params } from '@angular/router';
import { NeedService } from './../service/need.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-detail',
  templateUrl: './need-detail.component.html',
  styleUrls: ['./need-detail.component.scss']
})
export class NeedDetailComponent implements OnInit {

  selectNeed: any
  constructor(public needService: NeedService, public routeInfo: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((param: Params) => {
      this.selectNeed = this.needService.getNeedDetail(param["needId"]);
    })
    console.log(this.selectNeed)
  }

}

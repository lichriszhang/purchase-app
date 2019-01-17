import { NeedService } from './../service/need.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-need',
  templateUrl: './need.component.html',
  styleUrls  : ['./need.component.scss']
})
export class NeedComponent implements OnInit {

  needs: any
  constructor(public needService: NeedService) {
    this.getAllNeeds()
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllNeeds()
    }, 1000);
  }

  getAllNeeds() {
      this.needs = this.needService.getAllNeeds()
  }
}

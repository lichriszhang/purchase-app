import { CategoryService } from './service/category.service';
import { Component } from '@angular/core';
import { EquipService } from './service/equip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'purchase-app';

  category: any

  constructor(public categoryservice: CategoryService) {
    this.category = this.categoryservice.getAllCategory()
  }

  ngOnInit() {
  }

  getAllCategory() {
    this.category = this.categoryservice.getAllCategory()
    console.log(this.category)
  }
}

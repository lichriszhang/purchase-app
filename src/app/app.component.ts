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
  equipName: string

  constructor(public categoryservice: CategoryService, public equipservice: EquipService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllCategory()
    }, 100);
  }

  getAllCategory() {
    this.category = this.categoryservice.getAllCategory()
  }

  searchHandleClick() {
    this.equipservice.getEquipByName(this.equipName)
  }
}

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

  category: any;
  equipName: string;

  constructor(public categoryservice: CategoryService, public equipservice: EquipService) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryservice.getAllCategory().subscribe((data) => {
      this.category = data;
    });
  }

  searchHandleClick() {
    this.equipservice.getEquipByName(this.equipName);
  }
}

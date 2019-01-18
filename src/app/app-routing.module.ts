import { NeedDetailComponent } from './need-detail/need-detail.component';
import { CateEquipComponent } from './cate-equip/cate-equip.component';
import { OrderComponent } from './order/order.component';
import { NeedComponent } from './need/need.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipComponent } from './equip/equip.component';

const routes: Routes = [
  {
    path: 'cate/:cateId', component: CateEquipComponent
  },
  {
    path: 'name/:equipName', component: CateEquipComponent
  },
  {
    path: 'equip', component: EquipComponent
  },
  {
    path: 'supplier', component: SupplierComponent
  },
  {
    path: 'need', component: NeedComponent, children: [
      {
        path: ':needId', component: NeedDetailComponent
      }
    ]
  },
  {
    path: 'order', component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

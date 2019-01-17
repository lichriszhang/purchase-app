import { OrderComponent } from './order/order.component';
import { NeedComponent } from './need/need.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipComponent } from './equip/equip.component';

const routes: Routes = [
  {
    path: 'equip', component: EquipComponent
  },
  {
    path: 'supplier', component: SupplierComponent
  },
  {
    path: 'need', component: NeedComponent
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

import { UploadComponent } from './upload/upload.component';
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
    path: 'equip', component: EquipComponent, children: [
      {
        path: 'update/:equipId', component: UploadComponent
      },
      {
        path: 'upload', component: UploadComponent
      }
    ]
  },
  {
    path: 'supplier', component: SupplierComponent, children: [
      {
        path: 'update/:supplierId', component: UploadComponent
      },
      {
        path: 'upload', component: UploadComponent
      }
    ]
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
  },
  {
    path: 'upload', component: UploadComponent
  },
  {
    path: '**', component: EquipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {onSameUrlNavigation: 'reload'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

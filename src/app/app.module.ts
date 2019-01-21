import { OrderService } from './service/order.service';
import { NeedService } from './service/need.service';
import { SupplierService } from './service/supplier.service';
import { CategoryService } from './service/category.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { EquipService } from './service/equip.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipComponent } from './equip/equip.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NeedComponent } from './need/need.component';
import { OrderComponent } from './order/order.component';
import { CateEquipComponent } from './cate-equip/cate-equip.component';
import { NeedDetailComponent } from './need-detail/need-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipComponent,
    CategoryComponent,
    SupplierComponent,
    NeedComponent,
    OrderComponent,
    CateEquipComponent,
    NeedDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    EquipService,
    CategoryService,
    SupplierService,
    NeedService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers: any;

  constructor(public http: HttpClient) { }

  getAllSupplier(): any {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/supplier/all').subscribe((data) => {
        observe.next(data);
      });
    });
  }

  getSupplierById(supplierId: string) {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/supplier/' + supplierId).subscribe((data) => {
        observe.next(data);
      });
    });
  }
  removeSupplier(supplierId: string) {
    const param = new HttpParams()
    .set('sid', supplierId);
    const httpOptions = {
      'params': param
    };
    this.http.post('http://localhost:8080/supplier/delete', {}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }
  addSupplier(supplier: any) {
    const param = new HttpParams()
    .set('suppliername', supplier.name)
    .set('supplieradd', supplier.address)
    .set('suppliercontacter', supplier.contacts)
    .set('suppliertele', supplier.tele)
    .set('supplierphone', supplier.phone)
    .set('supplierfax', supplier.fax)
    .set('suppliermail', supplier.mail)
    .set('supplierzipcode', supplier.zipcode)
    .set('supplierbankaccount', supplier.bank)
    .set('supplierequipcategory', supplier.equipcate);
    const httpOptions = {
      'params': param
    };
    this.http.post('http://localhost:8080/supplier/add', {}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

  updateSupplier(supplierId: string) {
    this.getSupplierById(supplierId);
  }
}

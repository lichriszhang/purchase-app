import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers: any

  constructor(public http: HttpClient) { }
 
  getAllSupplier() {
    this.http.get('http://localhost:8080/supplier/all').subscribe((data) => {
      this.suppliers = data
    })
    return this.suppliers
  }
  removeSupplier(supplierId: string) {
    const param = new HttpParams()
    .set('sid', supplierId)
    const httpOptions = {
      'params': param
    }
    this.http.post('http://localhost:8080/supplier/delete', {}, httpOptions).subscribe((data) => {
      console.log(data)
    })
  }
}

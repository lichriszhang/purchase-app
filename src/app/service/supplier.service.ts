import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers: any

  constructor(public http: HttpClient) { }
 
  getAllEquip() {
    this.http.get('http://localhost:8080/supplier/all').subscribe((data) => {
      this.suppliers = data
    })
    return this.suppliers
  }
}

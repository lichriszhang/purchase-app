import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  
  equipResult: any
  curColor: string

  constructor(public http: HttpClient) { }

 
  getAllEquip() {
    this.http.get('http://localhost:8080/equip/all').subscribe((data) => {
      this.equipResult = data
    })
    return this.equipResult
  }
}

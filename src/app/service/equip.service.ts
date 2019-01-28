import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  
  equipResult: any
  curColor: string
  equips: any
  equipById: any

  constructor(public http: HttpClient) { }
 
  getAllEquip() {
    this.http.get('http://localhost:8080/equip/all').subscribe((data) => {
      this.equipResult = data
    })
    return this.equipResult
  }

  getEquipByCategory(cateId: string) {
    this.http.get('http://localhost:8080/equip/category/' + cateId).subscribe((data) => {
      this.equipResult = data
    })
    return this.equipResult
  }
  getEquipByName(equipName: string) {
    
    const param = new HttpParams().set('equipName', equipName)
    const httpOptions = {
      'params': param
    }
    console.log(httpOptions)
    this.http.post('http://localhost:8080/equip/name', {}, httpOptions).subscribe((data) => {
      this.equips = data
    })
    return this.equips
  }

  getEuqipById(equipId: string) {
    this.http.get('http://localhost:8080/equip/' + equipId).subscribe((data) => {
      this.equipById = data
    })
    return this.equipById
  }

  addEquipment(equipment: any, file: any) {
    const param = new HttpParams()
    .set('equipname', equipment.equipname)
    .set('equiptext', equipment.equiptext)
    .set('equipspec', equipment.equipspec)
    .set('equipmodel', equipment.equipmodel)
    .set('equipnum', equipment.equipnum)
    .set('equipcategory', equipment.equipcategory)
    .set('file', file)
    const httpOptions = {
      'params': param
    }
    this.http.post('http://localhost:8080/equip/add', {}, httpOptions).subscribe((data) => {
      console.log(data)
    })
  }

  removeEquip(equipId: string) {
    const param = new HttpParams()
    .set('eid', equipId)
    const httpOptions = {
      'params': param
    }
    this.http.post('http://localhost:8080/equip/delete', {}, httpOptions).subscribe((data) => {
      console.log(data)
    })
  }
}

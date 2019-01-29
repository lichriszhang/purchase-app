import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {


  equipResult: any;
  curColor: string;
  equips: any;
  equipById: any;

  equipId: string;
  constructor(public http: HttpClient) { }

  getAllEquip(): any {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/equip/all').subscribe(
        (data) => {
          observe.next(data);
        }
      );
    });
  }

  getEquipByCategory(cateId: string): any {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/equip/category/' + cateId).subscribe((data) => {
        observe.next(data);
      });
    })
  }
  getEquipByName(equipName: string): any {

    return new Observable((observe) => {
      const param = new HttpParams().set('equipName', equipName);
      const httpOptions = {
        'params': param
      };
      console.log(httpOptions);
      this.http.post('http://localhost:8080/equip/name', {}, httpOptions).subscribe((data) => {
        observe.next(data);
      });
    })
  }

  getEuqipById(equipId: string): any {
    console.log('要查询的equipId为：' + equipId);
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/equip/' + equipId).subscribe(
        (data) => {
          observe.next(data);
        }
      );
    });
  }

  addEquipment(equipment: any, file: any) {
    const param = new HttpParams()
      .set('equipname', equipment.equipname)
      .set('equiptext', equipment.equiptext)
      .set('equipspec', equipment.equipspec)
      .set('equipmodel', equipment.equipmodel)
      .set('equipnum', equipment.equipnum)
      .set('equipcategory', equipment.equipcategory)
      .set('file', file);
    const httpOptions = {
      'params': param
    };
    this.http.post('http://localhost:8080/equip/add', {}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

  removeEquip(equipId: string) {
    const param = new HttpParams()
      .set('eid', equipId);
    const httpOptions = {
      'params': param
    };
    this.http.post('http://localhost:8080/equip/delete', {}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

  updateEquip(equipment: any) {
    const param = new HttpParams()
      .set('equipid', equipment.equipid)
      .set('equipname', equipment.equipname)
      .set('equiptext', equipment.equiptext)
      .set('equipspec', equipment.equipspec)
      .set('equipmodel', equipment.equipmodel)
      .set('equipnum', equipment.equipnum)
      .set('equipcategory', equipment.equipcategory);
    const httpOptions = {
      'params': param
    };
    this.http.post('http://localhost:8080/equip/update', {}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }
}

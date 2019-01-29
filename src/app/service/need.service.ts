import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  needs: any;
  needDetail: any;
  constructor(public http: HttpClient) { }

  getAllNeeds(): any {
    return new Observable((observe) => {
      this.http.get('http://localhost:8080/needs/all').subscribe((data) => {
        observe.next(data);
      });
    });
  }
  getNeedDetail(needId: string) {
    this.http.get('http://localhost:8080/needs/' + needId).subscribe((data) => {
      this.needDetail = data;
    })
    return this.needDetail;
  }
}

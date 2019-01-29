import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryResult: any;
  constructor(public http: HttpClient) { }

   getAllCategory(): any {
     return new Observable((observe) => {
      this.http.get('http://localhost:8080/category/all').subscribe((data) => {
        observe.next(data);
      });
     });
  }

}

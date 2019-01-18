import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryResult: any
  constructor(public http: HttpClient) { }

   getAllCategory() {
    this.http.get('http://localhost:8080/category/all').subscribe((data) => {
      this.categoryResult =  data;
    })
    return this.categoryResult
  }
  
}

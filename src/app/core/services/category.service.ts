import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getDepartments() {
    return  this.http.get(`${environment.apiUrl}departments`);
  }

  getParentCategories() {
    return  this.http.get(`${environment.apiUrl}parent-categories`);
  }
}

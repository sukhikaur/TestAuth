import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from './types/category';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() { }
  getCategoryList() {
    
    return this.http.get<Category[]>(environment.apiUrl + '/api/Category');
  }

}

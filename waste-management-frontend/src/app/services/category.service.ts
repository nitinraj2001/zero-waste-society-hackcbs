import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../service/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  registerWasteCategory(category){
    return this.http.post(`${baseUrl}/category/`,category);
  }

  getAllCategories(){
    return this.http.get(`${baseUrl}/category/getAllWasteCategory`);
  }

  deleteCategory(id){
     return this.http.delete(`${baseUrl}/category/${id}`);
  }

  updateCategory(category){
    return this.http.put(`${baseUrl}/category/`,category);
  }
}

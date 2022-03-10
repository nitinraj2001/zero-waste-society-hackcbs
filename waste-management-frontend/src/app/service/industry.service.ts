import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private http:HttpClient) { }

  register(industry:any){
    return this.http.post(`${baseUrl}/industry/`,industry);
  }

  getIndustryDetails(id:any){
    return this.http.get(`${baseUrl}/industry/${id}`);
  }
}

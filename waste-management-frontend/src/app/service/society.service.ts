import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(private http:HttpClient) { }


  registerSociety(society){
    return this.http.post(`${baseUrl}/society/`,society);
  }

  getAllSocieties(){
    return this.http.get(`${baseUrl}/society/getAllSociety`)
  }

  getSocietyDetails(id:any){
    return this.http.get(`${baseUrl}/society/${id}`);
  }

  deleteSociety(id:any){
    return this.http.delete(`${baseUrl}/society/${id}`);
  }




}

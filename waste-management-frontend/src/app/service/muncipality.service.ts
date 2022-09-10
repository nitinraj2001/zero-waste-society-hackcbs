import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MuncipalityService {

  constructor(private http:HttpClient) { }

  public registerMuncipality(muncipality:any){
    return this.http.post(`${baseUrl}/muncipality/`,muncipality);

  }

  public getAllMuncipalities(){
    return this.http.get(`${baseUrl}/muncipality/getAllMuncipality`
)
  }

  public deleteMuncipality(){

  }

  public getMuncipality(){

  }

  


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteUserById(id: any) {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(`${baseUrl}/user/`);
  }
}

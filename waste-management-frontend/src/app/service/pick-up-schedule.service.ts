import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PickUpScheduleService {

  user:any;

  constructor(private http:HttpClient) { }

  scheduleYourWastePickUp(schedulePickUp:any){
    return this.http.post(`${baseUrl}/waste/schedule-pickUp`,schedulePickUp);
  }

  getScheduleDetails(theid:any){
    console.log("user id is "+theid);
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    const id=this.user.userId;
    return this.http.get(`${baseUrl}/waste/schedule/${id}`);
  }

  deleteSchedule(id:any){
    return this.http.delete(`${baseUrl}/waste/schedule/${id}`);
  }



}

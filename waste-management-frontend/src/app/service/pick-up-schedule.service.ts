import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PickUpScheduleService {

  constructor(private http:HttpClient) { }

  scheduleYourWastePickUp(){
    
  }

}

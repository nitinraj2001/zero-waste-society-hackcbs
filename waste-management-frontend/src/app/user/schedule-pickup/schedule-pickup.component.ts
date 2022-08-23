import { Component, OnInit } from '@angular/core';
import {PickUpScheduleService} from '../../service/pick-up-schedule.service';

@Component({
  selector: 'app-schedule-pickup',
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.css']
})
export class SchedulePickupComponent implements OnInit {

  user:any;

  pickUpSchedule:any={"wasteDetails":"","userId":"","date":"","time":"","location":""}

  constructor(private schedulePickUpService:PickUpScheduleService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    this.pickUpSchedule.userId=this.user.userId;
  }

  scheduleYourPickUp(){
     console.log(this.pickUpSchedule);
     this.schedulePickUpService.scheduleYourWastePickUp(this.pickUpSchedule).subscribe((data)=>{
      console.log(data);
     }),
     (error)=>{
      console.log(error);
     }
  }

}

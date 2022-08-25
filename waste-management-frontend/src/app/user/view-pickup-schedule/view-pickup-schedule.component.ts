import { Component, OnInit } from '@angular/core';
import { PickUpScheduleService } from 'src/app/service/pick-up-schedule.service';
import { SchedulePickupComponent } from '../schedule-pickup/schedule-pickup.component';

@Component({
  selector: 'app-view-pickup-schedule',
  templateUrl: './view-pickup-schedule.component.html',
  styleUrls: ['./view-pickup-schedule.component.css']
})
export class ViewPickupScheduleComponent implements OnInit {

  user:any;

  schedules:any=[];

  theschedules:any={"wasteDetails":"","location":"","date":"","time":""}

  constructor(private schedulePickUpService:PickUpScheduleService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    this.getAllUserSchedules();
  }

  getAllUserSchedules(){
    this.schedulePickUpService.getScheduleDetails(this.user.userId).subscribe((data)=>{
      console.log("data of schedule "+this.schedules);
      this.schedules=data;
    })
  }

}

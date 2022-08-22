import { Component, OnInit } from '@angular/core';
import {PickUpScheduleService} from '../../service/pick-up-schedule.service';

@Component({
  selector: 'app-schedule-pickup',
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.css']
})
export class SchedulePickupComponent implements OnInit {

  pickUpSchedule:any={"wasteDetails":"","userId":"","date":"","time":"","location":""}

  constructor(private schedulePickUpService:PickUpScheduleService) { }

  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-pickup',
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.css']
})
export class SchedulePickupComponent implements OnInit {

  pickUpSchedule:any={"wasteDetails":"","userId":"","date":"","time":""}

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {SocietyService} from '../../service/society.service'

@Component({
  selector: 'app-view-societies',
  templateUrl: './view-societies.component.html',
  styleUrls: ['./view-societies.component.css']
})
export class ViewSocietiesComponent implements OnInit {

  society:any={"id":"","name":"","email":"","address":""};

  constructor(private societyService:SocietyService) { }

  ngOnInit(): void {
  }

}

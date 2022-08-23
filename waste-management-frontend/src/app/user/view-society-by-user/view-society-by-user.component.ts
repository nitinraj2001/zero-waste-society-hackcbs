import { Component, OnInit } from '@angular/core';
import { SocietyService } from 'src/app/service/society.service';

@Component({
  selector: 'app-view-society-by-user',
  templateUrl: './view-society-by-user.component.html',
  styleUrls: ['./view-society-by-user.component.css']
})
export class ViewSocietyByUserComponent implements OnInit {

  constructor(private societyService:SocietyService) { }

  ngOnInit(): void {
    
  }

}

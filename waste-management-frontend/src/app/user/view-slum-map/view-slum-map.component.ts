import { Component, OnInit } from '@angular/core';
import { SlumAreaService } from 'src/app/service/slum-area.service';

@Component({
  selector: 'app-view-slum-map',
  templateUrl: './view-slum-map.component.html',
  styleUrls: ['./view-slum-map.component.css']
})
export class ViewSlumMapComponent implements OnInit {

  constructor(private slumAreaService:SlumAreaService) { }

  slumAreas:any=[];

  slumArea:any={"location":"","email":"","contact":"","description":""}

  ngOnInit(): void {
    this.getAllSlumAreaDetails();
  }

  getAllSlumAreaDetails(){
    this.slumAreaService.getAllSlumArea().subscribe((data)=>{
      console.log(data);
      this.slumAreas=data;
    }),
    (error)=>{
      console.log(error);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {SlumAreaService} from '../../service/slum-area.service'


@Component({
  selector: 'app-register-slum-area',
  templateUrl: './register-slum-area.component.html',
  styleUrls: ['./register-slum-area.component.css']
})
export class RegisterSlumAreaComponent implements OnInit {

  constructor(private slumAreaService:SlumAreaService) { }

  slumArea={"email":"","location":"","contact":"","description":""}

  ngOnInit(): void {
  }

  registerSlumArea(){
    this.slumAreaService.registerSlumArea(this.slumArea).subscribe((data)=>{
      console.log(data);
    }),
    (error)=>{
      console.log(error);
    }

  }

}

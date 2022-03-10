import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {IndustryService} from '../../service/industry.service';

@Component({
  selector: 'app-add-industry',
  templateUrl: './add-industry.component.html',
  styleUrls: ['./add-industry.component.css']
})
export class AddIndustryComponent implements OnInit {

  industry:any={"name":"","description":"","email":"","industryType":"","sector":"","address":""};

  constructor(private industryService:IndustryService,private snakeBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  registerIndustry(){
    this.industryService.register(this.industry).subscribe((data)=>{
      this.snakeBar.open("industry registered successfully","ok");
    }),
    (error)=>{
      this.snakeBar.open("not able to register industry try again!","ok");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
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
      Swal.fire("success!!","industry is successfully added","success");
    }),
    (error)=>{
      Swal.fire("error!!","industry is not added due to some reasons","error");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { IndustryService } from 'src/app/service/industry.service';

@Component({
  selector: 'app-user-view-industry',
  templateUrl: './user-view-industry.component.html',
  styleUrls: ['./user-view-industry.component.css']
})
export class UserViewIndustryComponent implements OnInit {

  industryId:any;

  industry:any={"name":"","description":"","email":"","industryType":"","sector":"","address":""};
  industries:any=[];

  constructor(private industryService:IndustryService) { }

  ngOnInit(): void {
    this.getIndustryDetailsToView();
  }

  getIndustryDetailsToView(){
    this.industryService.fetchAllIndustriesDetails().subscribe((data)=>{
      this.industries=data;
    }),
    (error)=>{
      console.log(error);
    }
  }

  


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustryService } from 'src/app/service/industry.service';

@Component({
  selector: 'app-view-industry',
  templateUrl: './view-industry.component.html',
  styleUrls: ['./view-industry.component.css']
})
export class ViewIndustryComponent implements OnInit {

  industryId:any;

  industry:any={"name":"","description":"","email":"","industryType":"","sector":"","address":""};

  constructor(private route:ActivatedRoute,private industryService:IndustryService ) { }

  ngOnInit(): void {
    this.industryId=+this.route.snapshot.params['id'];
    this.getIndustryDetailsToView();
  }

  getIndustryDetailsToView(){
    this.industryService.getIndustryDetails(this.industryId).subscribe((data)=>{
      this.industry=data;
    }),
    (error)=>{
      console.log(error);
    }
  }



}

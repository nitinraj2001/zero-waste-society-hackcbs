import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustryService } from 'src/app/service/industry.service';

@Component({
  selector: 'app-view-industries',
  templateUrl: './view-industries.component.html',
  styleUrls: ['./view-industries.component.css']
})
export class ViewIndustriesComponent implements OnInit {

  industries:any=[];


  industry:any={"name":"","description":"","email":"","industryType":"","sector":"","address":""};

  constructor(private route:ActivatedRoute,private industryService:IndustryService ) { }

  ngOnInit(): void {
    this.getAllIndustry();
  }

  getAllIndustry(){
    this.industryService.fetchAllIndustriesDetails().subscribe((data)=>{
       console.log(data);
       this.industries=data;
    },
    (error)=>{
      console.log(error);
    })
  }



}

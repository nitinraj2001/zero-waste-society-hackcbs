import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocietyService } from 'src/app/service/society.service';

@Component({
  selector: 'app-view-society-by-user',
  templateUrl: './view-society-by-user.component.html',
  styleUrls: ['./view-society-by-user.component.css']
})
export class ViewSocietyByUserComponent implements OnInit {

  societyId:any;
  base64Data: any;
  retrievedImage: string;

  thesociety:any;
  society={"name":"","email":"","address":""};

  constructor(private societyService:SocietyService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.societyId=+this.route.snapshot.paramMap.get('id');
   this.getSocietyInfo();
  }

  getSocietyInfo(){
     this.societyService.getSocietyDetails(this.societyId).subscribe((data)=>{
        console.log(data);
        this.thesociety=data;
        this.base64Data=this.thesociety.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.thesociety.picByte=this.retrievedImage;
     })
  }

}

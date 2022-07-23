import { Component, OnInit } from '@angular/core';
import { SocietyService } from 'src/app/service/society.service';

@Component({
  selector: 'app-view-society',
  templateUrl: './view-society.component.html',
  styleUrls: ['./view-society.component.css']
})
export class ViewSocietyComponent implements OnInit {

  societies:any=[];
  base64Data: any;
  retrievedImage: string;
  society={"name":"","email":"","address":""};
  constructor(private societyService:SocietyService) { }

  ngOnInit(): void {
    this.getAllRegisteredSociety();
  }
  getAllRegisteredSociety(){
    this.societyService.getAllSocieties().subscribe((data)=>{
      console.log(data);
      this.societies=data;
      this.societies.forEach((element)=>{
        this.base64Data=element.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        element.picByte=this.retrievedImage;
      })
    })
  }

}

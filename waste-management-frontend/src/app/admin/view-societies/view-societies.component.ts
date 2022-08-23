import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocietyService} from '../../service/society.service'

@Component({
  selector: 'app-view-societies',
  templateUrl: './view-societies.component.html',
  styleUrls: ['./view-societies.component.css']
})
export class ViewSocietiesComponent implements OnInit {

  societies:any=[];

  base64Data: any;

  retrievedImage: string;

  society:any={"id":"","name":"","email":"","address":""};

  constructor(private societyService:SocietyService,private route:Router) { }

  ngOnInit(): void {
    this.getAllSociety();
  }

  getAllSociety(){
    this.societyService.getAllSocieties().subscribe((data)=>{

      console.log(data);
      this.societies=data;
       this.societies.forEach(element => {
         this.base64Data=element.picByte;
       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
       element.picByte=this.retrievedImage;
       });
     },
     (error)=>{
       console.log(error);
     }

    )}

    viewSociety(id:any){
       this.route.navigate['/user/view-society/${id}'];
    }

    
      
  
  


}

import { Component, OnInit } from '@angular/core';
import { NGOService } from 'src/app/service/ngo.service';

@Component({
  selector: 'app-view-ngos',
  templateUrl: './view-ngos.component.html',
  styleUrls: ['./view-ngos.component.css']
})
export class ViewNgosComponent implements OnInit {

  ngos:any=[];
  ngo:any={ngoId:"",name:"",description:"",location:"",emailId:"",ngoType:""}
  base64Data: any;
  retrievedImage: string;

  constructor(private ngoService:NGOService) { }

  ngOnInit(): void {
    this.fetchAllNGO();
  }

  fetchAllNGO(){
    this.ngoService.getAllNGOS().subscribe((data)=>{
      console.log(data);
      this.ngos=data;
      this.ngos.forEach(element=>{
        this.base64Data=element.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        element.picByte=this.retrievedImage;
      });
    },
    (error)=>{
    console.log(error);
    }
    )
  }


}

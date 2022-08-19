import { Component, OnInit } from '@angular/core';
import { WasteService } from 'src/app/service/waste.service';

@Component({
  selector: 'app-view-uploaded-waste',
  templateUrl: './view-uploaded-waste.component.html',
  styleUrls: ['./view-uploaded-waste.component.css']
})
export class ViewUploadedWasteComponent implements OnInit {
  
  userId:any;
  user:any;
  waste:any={"name":"","description":""}

  category:any={"id":"","categoryName":"","description":""};
  picByte: any;
  base64Data: any;
  wastes:any=[];
  retrievedImage: string;


  constructor(private wasteService:WasteService) { }



  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    this.fetchAllWasteUploadedByUser();
  }

  fetchAllWasteUploadedByUser(){
    this.wasteService.getAllWastesUploadByUser(this.user.userId).subscribe((data)=>{
      console.log(data);
      this.wastes=data;
       this.wastes.forEach(element => {
         this.base64Data=element.picByte;
       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
       element.picByte=this.retrievedImage;
    })
  });
}
}
  

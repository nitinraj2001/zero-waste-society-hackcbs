import { Component, OnInit } from '@angular/core';
import { WasteService } from 'src/app/service/waste.service';

@Component({
  selector: 'app-view-waste',
  templateUrl: './view-waste.component.html',
  styleUrls: ['./view-waste.component.css']
})
export class ViewWasteComponent implements OnInit {

  wastes:any=[];

  base64Data: any;

  retrievedImage: string;

  waste:any={"name":"","description":"","userId":""};


  constructor(private wasteService:WasteService) { }

  ngOnInit(): void {
    this.fetchAllWaste();
  }

  fetchAllWaste(){
    this.wasteService.getAllWastes().subscribe((data)=>{
      console.log(data);
      this.wastes=data;
      this.wastes.forEach(element => {
        this.base64Data=element.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      element.picByte=this.retrievedImage;
      });
    },
    (error)=>{
      console.log(error);
    })
  }
}

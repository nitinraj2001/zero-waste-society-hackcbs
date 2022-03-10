import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { WasteService} from '../../service/waste.service';

@Component({
  selector: 'app-add-waste',
  templateUrl: './add-waste.component.html',
  styleUrls: ['./add-waste.component.css']
})
export class AddWasteComponent implements OnInit {

  categories:any=[];

  base64Data: any;

  categoryName:any;

  categoryId:any;

  retrievedImage: string;

  waste:any={"name":"","description":""}

  category:any={"id":"","categoryName":"","description":""};
  picByte: any;
  user:any;
  userId:any;

 

  constructor(private categoryService:CategoryService,private wasteService:WasteService,private router:Router,private route:ActivatedRoute,private matsnackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.fetchAllCategories();
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    console.log(JSON.parse(this.user));
    this.userId=this.user.userId;
  }

  onFileChanged(event) {
    this.picByte = event.target.files[0];
  }

  registerWaste(){
    this.categoryId=1;
    console.log(this.categories);
    const formdata=new FormData();
    console.log(this.waste);
    formdata.append("name",this.waste.name);
    formdata.append("description",this.waste.description);
    formdata.append("wasteImage",this.picByte);
    formdata.append("userId",this.userId);
    console.log("userid would be",this.user.userId);
    formdata.append("categoryId",this.categoryId);
    console.log(formdata);
    this.wasteService.registerYourWaste(formdata).subscribe((data)=>{
      console.log(data);
      this.matsnackBar.open("waste is uploaded","ok");

    })

  }

   fetchAllCategories(){
     this.categoryService.getAllCategories().subscribe((data)=>{
       console.log(data);
       this.categories=data;
        
      },
      (error)=>{
        console.log(error);
      }
    )
     
   }

  }
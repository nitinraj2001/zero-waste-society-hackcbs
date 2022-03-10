import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

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

 

  constructor(private categoryService:CategoryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchAllCategories();
    this.user=localStorage.getItem("user");
  }

  onFileChanged(event) {
    this.picByte = event.target.files[0];
  }

  registerWaste(){
    this.categories = this.categories.filter(function(elem) {
      //return false for the element that matches both the name and the id
      return (elem.name == this.categoryName)
    });
    this.categoryId=this.categories[0].id;
    const formdata=new FormData();
    console.log(this.waste);
    formdata.append("name",this.category.categoryName);
    formdata.append("description",this.category.description);
    formdata.append("wasteImage",this.picByte);
    formdata.append("userId",this.user.userId);
    formdata.append("categoryId",this.categoryId);
    console.log(formdata);

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
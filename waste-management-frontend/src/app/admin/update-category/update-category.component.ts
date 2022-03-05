import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category:any={"id":"","categoryName":"","description":"",}
  picByte: any;
  categoryId:any;
  base64Data: any;

  retrievedImage: string;

  constructor(private categoryService:CategoryService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId=+this.router.snapshot.params['id'];
    this.categoryService.getCategory(this.categoryId).subscribe((data)=>{
      this.category=data;
      this.base64Data=this.category.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.category.picByte=this.retrievedImage;
    })
  }
  onFileChanged(event) {
    this.picByte = event.target.files[0];
  }

  updateWasteCategory(){
    const formdata=new FormData();
    console.log(this.category);
    formdata.append("name",this.category.categoryName);
    formdata.append("description",this.category.description);
    formdata.append("categoryImage",this.picByte);
    console.log(formdata);
    this.categoryService.updateCategory(formdata).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
      }
    )

  }


}

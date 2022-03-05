import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private categoryService:CategoryService,private route:Router) { }

  ngOnInit(): void {
    
  }
  onFileChanged(event) {
    this.picByte = event.target.files[0]
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

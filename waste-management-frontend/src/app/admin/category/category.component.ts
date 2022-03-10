import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {CategoryService} from '../../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:any={"id":"","categoryName":"","description":"",}
  picByte: any;
  categoryId:any;

  constructor(private categoryService:CategoryService,private route:Router) { }

  ngOnInit(): void {

  }
  onFileChanged(event) {
    this.picByte = event.target.files[0]
  }

  registerCategory(){
    const formdata=new FormData();
    console.log(this.category);
    formdata.append("name",this.category.categoryName);
    formdata.append("description",this.category.description);
    formdata.append("categoryImage",this.picByte);
    console.log(formdata);
    this.categoryService.registerWasteCategory(formdata).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("waste category is added successfully");
        this.route.navigate(['/admin/view-categories']);
        
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}

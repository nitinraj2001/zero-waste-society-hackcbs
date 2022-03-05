import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=[];

  base64Data: any;

  retrievedImage: string;

  category:any={"categoryName":"","description":""};

 

  constructor(private categoryService:CategoryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchAllCategories();
  }

   fetchAllCategories(){
     this.categoryService.getAllCategories().subscribe((data)=>{
       console.log(data);
       this.categories=data;
        this.categories.forEach(element => {
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

   deleteWasteCategory(id){
     console.log("category with id "+id+" is to be deleted");
     Swal.fire({
      icon:'info',title:'Are you sure you want to delete this question?',confirmButtonText:'Delete',showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
          this.categoryService.deleteCategory(id).subscribe(data=>{
            console.log(data);
           Swal.fire("success!!","category is successfully deleted","success");
         },
         (error)=>{
           //console.log(error);
           Swal.fire("err!!","category can't be deleted try again!!","error");
         }
       )
      }
    }
    )
   

  }

  updateWasteCategory(id){
    this.router.navigate([`/admin/update-category/${id}`]);
  }

}

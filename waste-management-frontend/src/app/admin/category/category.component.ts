import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:any={"categoryName":"","description":"",}
  picByte: any;
  categoryId:any;

  constructor() { }

  ngOnInit(): void {
    
  }
  onFileChanged(event) {
    this.picByte = event.target.files[0]
  }

}

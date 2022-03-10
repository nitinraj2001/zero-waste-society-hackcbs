import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocietyService } from 'src/app/service/society.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-society',
  templateUrl: './register-society.component.html',
  styleUrls: ['./register-society.component.css']
})
export class RegisterSocietyComponent implements OnInit {

  society:any={"id":"","name":"","email":"","address":""};
  picByte: any;

  constructor(private societyService:SocietyService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

  }

  onFileChanged(event) {
    this.picByte = event.target.files[0];
  }

  registerSociety(){
      const formdata=new FormData();
      console.log(this.society);
      formdata.append("name",this.society.name);
      formdata.append("email",this.society.email);
      formdata.append("address",this.society.address);
      formdata.append("societyImage",this.picByte);
      console.log(formdata);
      this.societyService.registerSociety(formdata).subscribe(
        (data)=>{
          console.log(data);
           this.snackBar.open("society registered successfully","success");
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}

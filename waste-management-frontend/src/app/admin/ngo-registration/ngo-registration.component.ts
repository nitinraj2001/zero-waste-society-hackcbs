import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {NGOService} from '../../service/ngo.service'

@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.css']
})
export class NgoRegistrationComponent implements OnInit {

  ngo:any={"name":"","description":"","location":"","email":"","ngoType":""}
  picByte: any;

  constructor(private ngoService:NGOService,private route:Router,private matSnackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.picByte = event.target.files[0];
  }

  registerNGO(){
    const formdata=new FormData();
    formdata.append("name",this.ngo.name);
    formdata.append("email",this.ngo.email);
    formdata.append("description",this.ngo.description);
    formdata.append("location",this.ngo.location);
    formdata.append("ngoDocument",this.picByte);
    formdata.append("ngoType",this.ngo.ngoType);
    console.log(formdata);
      this.ngoService.registerNgo(formdata).subscribe((data)=>{
      console.log(data);
      Swal.fire("Ngo registered successifully","success");
    })
  }

}

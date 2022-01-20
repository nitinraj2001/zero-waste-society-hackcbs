import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from './../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any={"username":"","email":"","password":"","phoneNumber":""}

  confirmPassword:any;


  constructor(private snakeBar:MatSnackBar,private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.user);
    if(this.user.password!=this.confirmPassword){
       this.snakeBar.open("pasword not match please confirm password","ok");
    }
    if(this.user.username==null||this.user.username==''){
      this.snakeBar.open("username can't be empty");
    }
    if(this.user.phoneNumber==null||this.user.phoneNumber==''){
      this.snakeBar.open("phoneNumber can't be empty");
    }
    if(this.user.email==null||this.user.email==''){
      this.snakeBar.open("email can't be empty or must contain @");
    }

      //console.log(this.User);
      this.registerService.registerUser(this.user).subscribe((data)=>{console.log(data),Swal.fire("user is successfully registered"),this.router.navigate(['login']);},(error)=>this.snakeBar.open("something went wrong!! please try again...",'ok',{duration:30000}));
      //window.location.href='/login';
      

    
  }

  

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={"username":"","password":""}

  constructor(private snakeBar:MatSnackBar,private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
    if(this.loginService.IsloggedIn()){
      if(this.loginService.getUserAuthority()=='ADMIN'){
      this.router.navigate(['admin']);
      }
      else if(this.loginService.getUserAuthority()=='USER'){
       this.router.navigate(['user']);
      }
      else{
        this.loginService.logout();
      }
    }

  }

  loginUser(){
    if(this.user.username==null||this.user.username==''){
      this.snakeBar.open("invalid username try again","ok");
    }
    if(this.user.password==null||this.user.password==''){
      this.snakeBar.open("invalid password try again","ok");
    }

    this.generateToken();
  }

  generateToken(){
    this.loginService.generateJwtToken(this.user).subscribe(
      (data)=>{
        console.log(data),
        //Swal.fire("user is successfully login"),
        this.loginService.loginUser(JSON.parse(JSON.stringify(data)).token),
        this.loginService.getCurrentUser(this.user.username).subscribe(
          (data)=>{
            this.loginService.setUserDetails(data);
            //console.log("currently login user is "+JSON.stringify(data))
            if(this.loginService.getUserAuthority()=='ADMIN'){
               //window.location.href='/admin';
               this.router.navigate(['admin']);
               this.loginService.loginStatusSubject.next(true);
               this.snakeBar.open("admin is successfully logged in","ok");
            }
            else if(this.loginService.getUserAuthority()=='USER'){
             //window.location.href='/user';
             this.router.navigate(['user']);
             this.loginService.loginStatusSubject.next(true);
             this.snakeBar.open("user is successfully logged in","ok");
            }
            else{
              this.loginService.logout();
            }
          },
          (error)=>this.snakeBar.open("no user is currently logged in",'ok',{duration:3000})
          )
       },
       (error)=>this.snakeBar.open("invalid details!! please try again with valid credentials",'ok',{duration:3000}
       ));
 }

  

}

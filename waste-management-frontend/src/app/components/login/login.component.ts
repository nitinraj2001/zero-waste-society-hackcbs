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

  theuser:any;

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
        this.theuser=JSON.parse(JSON.stringify(data)).user;
        console.log(this.theuser);
        this.loginService.setUserDetails(this.theuser);
        if(this.theuser.authorities[0].authority=='USER'){
          console.log(this.theuser.authorities[0].authority);
          this.router.navigate(['user']);
          this.loginService.loginStatusSubject.next(true);
          this.snakeBar.open("user is successfully logged in","ok");
          window.location.reload();
        }
        else if(this.theuser.authorities[0].authority=='ADMIN'){
          this.router.navigate(['admin']);
          this.loginService.loginStatusSubject.next(true);
          this.snakeBar.open("admin is successfully logged in","ok");
          window.location.reload();
        }
        else{
          this.loginService.logout();
          window.location.reload();
        }
      },
      (error)=>{
         this.snakeBar.open("Try with valid credentials","ok");
      }

    );
        
      
 }

  

}

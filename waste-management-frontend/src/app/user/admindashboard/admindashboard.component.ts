import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  username:any;
  user:any;
  jwtTokenStatus: any;
  mySub: Subscription;

  constructor(private loginService:LoginService,private route:Router,private snakeBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("request to logout came");
   this.loginService.logout();
   this.route.navigate(['/login']);
   
   this.snakeBar.open("you have successfully logout!!","ok",{duration:3000});
 }

}

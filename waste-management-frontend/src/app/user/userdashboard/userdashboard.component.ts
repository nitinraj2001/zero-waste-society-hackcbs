import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  username:any;
  user:any;
  jwtTokenStatus: any;
  mySub: Subscription;

  constructor(private loginService:LoginService,private route:Router,private snakeBar:MatSnackBar) { }

  ngOnInit(): void {
     this.user=JSON.parse(localStorage.getItem("user"));
     this.username=this.user.username;
     this.mySub = interval(1000*60*10).subscribe((func => {
      this.checkJwtTokenStatus();
      //ai chat bot integration
      (function(d,m){
         var kommunicateSettings={"appId":"zerowasteSociety-yu9c","popupWidget":true,"automaticChatOpenOnNavigation":true};
         var s=document.createElement("script");s.type="text/javascript";s.async=true;
         s.src="https://widget.kommunicate.io/v2/kommunicate.app";
         var h=document.getElementsByTagName("head")[0];
         h.appendChild(s);
         (window as any).kommunicate=m;
         m._globals=kommunicateSettings;
      })
      (document,(window as any).kommunicate||{});
    }))
  console.log("chatbot is not coming");
  }

  checkJwtTokenStatus(){
    let token=this.loginService.getToken();
    this.loginService.generatejwtTokenStatus(token).subscribe(
     (data)=>{
       this.jwtTokenStatus=data;
       console.log("jwt token status is : "+this.jwtTokenStatus)
       if(this.jwtTokenStatus){
         this.loginService.logout();
       }
     })
 }

 logout(){
   console.log("request to logout came");
  this.loginService.logout();
  this.route.navigate(['/login']);
  
  this.snakeBar.open("you have successfully logout!!","ok",{duration:3000});
}


 ngOnDestroy(){
   this.mySub.unsubscribe();
 }

}

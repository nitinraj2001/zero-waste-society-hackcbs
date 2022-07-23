import { MapsAPILoader } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
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

  latitude: number;
  longitude: number;
  zoom:number;
  username:any;
  user:any;
  jwtTokenStatus: any;
  mySub: Subscription;

  constructor(private loginService:LoginService,private route:Router,private snakeBar:MatSnackBar,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {
     this.user=JSON.parse(localStorage.getItem("user"));
     this.username=this.user.username;
     this.mySub = interval(1000*60*10).subscribe((func => {
      this.checkJwtTokenStatus();
      //ai chat bot integration
      
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

private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
    });
  }
}


 ngOnDestroy(){
   this.mySub.unsubscribe();
 }

}

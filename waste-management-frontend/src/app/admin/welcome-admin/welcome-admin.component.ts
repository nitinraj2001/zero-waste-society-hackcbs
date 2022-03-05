import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {UserService} from './../../service/user.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  users:any=[{"userId":"","username":"","email":"","phonenumber":""},]

  constructor(private userService:UserService,private snakeBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.getAllRegisteredUsers();
  }

  getAllRegisteredUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    }),
    (error)=>{
      console.log(error);
    }
  }

  deleteUser(id){
    console.log("user with id"+id+" is to be deleted");
    this.userService.deleteUserById(id).subscribe(data=>{
      this.snakeBar.open("user deleted successfully","ok");
    }),
    (error)=>{
      this.snakeBar.open("can't delete this user try again","error");
      this.router.navigate(['/admin']);
    }
  }

  findUser(id){
    console.log("user with id"+id+" is to be searched");
    this.router.navigate([`/admin/view-user-profile/${id}`]);
  }



}

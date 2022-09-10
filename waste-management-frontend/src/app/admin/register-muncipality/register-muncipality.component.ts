import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-muncipality',
  templateUrl: './register-muncipality.component.html',
  styleUrls: ['./register-muncipality.component.css']
})
export class RegisterMuncipalityComponent implements OnInit {

  muncipality:any={"location":"","email":"","contact":""};

  constructor() { }

  ngOnInit(): void {
  }

  registerMuncipality(){
    
  }

}

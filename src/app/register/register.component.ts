import { Component, OnInit } from '@angular/core';
import { MsgService } from "../msg.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {  name:'', 
  email:'',
  mobile:null, 
  username: '',
  password: ''};
  constructor(private ms: MsgService, private router: Router) { }

  ngOnInit() {
  }

signUp(){
    
    this.ms.register(this.user).subscribe(data =>{
      if(data)
      {
        console.log("user already exists")
      }
      else
      this.router.navigateByUrl("");
    });
   
}
}

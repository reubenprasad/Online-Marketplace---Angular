import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private ms: MsgService) { }
  un;
  pw;
  ngOnInit() {
  }

login(){
    
    this.ms.login(this.un, this.pw).subscribe(data=>{
      if (data['user'] == true) 
      {
        localStorage.setItem("Username",this.un)
        this.router.navigateByUrl("/seller");
      }
      else {
       
        this.router.navigateByUrl("");
      } 
    })
  }

}

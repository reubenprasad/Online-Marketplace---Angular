import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MsgService } from "../msg.service";

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  aproducts:any;
  sproducts:any;
  empty:Boolean = true;
  user = localStorage.getItem("Username");
  constructor(private router: Router, private ms: MsgService) { }

  ngOnInit() {
    this.ms.getUserProductsA(this.user).subscribe(data=>{
      this.aproducts = data;
    })
    this.ms.getUserProductsS(this.user).subscribe(data=>{
      this.sproducts = data;
      if(this.sproducts.length == 0)
      {
        this.empty = false;
      }
    })
  }

  logOut(){
    localStorage.removeItem("Username");
    this.router.navigateByUrl("/");
  }

  markSold(id){
      this.ms.markSold(id).subscribe(data=>{
        if (data['sold'] == true)
        {
          this.ms.getUserProductsA(this.user).subscribe(data=>{
            this.aproducts = data;
          })
          this.ms.getUserProductsS(this.user).subscribe(data=>{
            this.sproducts = data;
            if(this.sproducts.length == 0)
            {
              this.empty = false;
            }
          })
        }
      })  
  }

  deleteProduct(pid){
    this.ms.deleteProduct(pid).subscribe(data=>{
      if(data['deleted'] == true)
      {
        this.ms.getUserProductsA(this.user).subscribe(data=>{
          this.aproducts = data;
        })
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MsgService } from "../msg.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
cat;
x;
search:String;
loc_selected:String;
products:any;
loc:any;
empty:Boolean = false;
  constructor(private router: ActivatedRoute, private ms: MsgService) { }

  ngOnInit() {
    this.cat = this.router.snapshot.paramMap.get('cat');

    this.ms.getProducts(this.cat).subscribe(data=>{
      console.log(data);
      this.products = data;
      if(this.products.length == 0)
      {
        this.empty = true;
      }
    })
  }

getLoc(){
  this.ms.getL().subscribe(data=>{
    this.loc = data;
  })
}

applyFilter(x){
  this.empty = false;
  this.ms.getFiltered(x,this.loc_selected,this.search,this.cat).subscribe(data=>{
    this.products = data;
    console.log(this.products);
    if(this.products.length == 0)
      {
        this.empty = true;
      }
  })
}

}

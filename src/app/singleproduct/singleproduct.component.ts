import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MsgService } from "../msg.service";

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  products:any;
  id:any;
  seller:any;
  constructor(private router: ActivatedRoute, private ms: MsgService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.ms.getSingleProduct(this.id).subscribe(data=>{
      this.products = data[0];
      this.ms.getSeller(this.products.seller).subscribe(data=>{
        this.seller = data[0];
      })
    })

    
  }

}

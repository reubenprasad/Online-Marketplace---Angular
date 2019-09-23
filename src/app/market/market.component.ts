import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
categories:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/market/categories");
  }

}

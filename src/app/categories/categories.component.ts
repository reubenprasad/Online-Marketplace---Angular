import { Component, OnInit } from '@angular/core';
import {MsgService} from '../msg.service'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;
  constructor(private ms : MsgService) { }

  ngOnInit() {
    this.ms.getCat().subscribe(data=>{
      
      this.categories = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {MsgService} from '../msg.service'
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { RouterLink ,Router} from '@angular/router';

const URL = 'https://onlinemarketplace-server.herokuapp.com/market/add';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  categories:any;
  locations:any;
  user = localStorage.getItem("Username");
  product = {
    title:'',
    price:null,
    category:'',
    location:'',
    seller:this.user
  };
  image;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  constructor(private router: Router,private ms : MsgService) { }

  ngOnInit() {
    this.ms.getCat().subscribe(data=>{
      
      this.categories = data;
    })

    this.ms.getL().subscribe(data=>{
      this.locations = data;
    })

    this.uploader.onAfterAddingFile = (image) => { image.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };

  }

  addProduct(){
   
    this.product['image'] = this.image.slice(12);
    this.ms.addProduct(this.product).subscribe();
    this.router.navigateByUrl("/seller"); 
  }

}

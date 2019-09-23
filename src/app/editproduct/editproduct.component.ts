import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MsgService} from "../msg.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/market/edit';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  pid;
  product;
  image;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  constructor(private router: Router, private route: ActivatedRoute, private ms: MsgService) { }

  ngOnInit() {
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.ms.getSingleProduct(this.pid).subscribe(data=>{
      this.product = data[0];
    })
    
    
    this.uploader.onAfterAddingFile = (image) => { image.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  editProduct(){
    this.product['image'] = this.image.slice(12);
    this.ms.editProduct(this.product).subscribe();    
    this.router.navigateByUrl("/seller");
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) { }

getCat(){
    return this.http.get("http://localhost:3000/market");
}

getProducts(cat){
    return this.http.get("http://localhost:3000/market/products/"+cat);
}

getL(){
  return this.http.get("http://localhost:3000/market/loc");
}

getFiltered(x,loc_selected,search,category){
  return this.http.post("http://localhost:3000/market/filter/",{filter:x,location:loc_selected,search:search,category:category})
}

getSingleProduct(id){
  return this.http.get("http://localhost:3000/market/singleproduct/"+ id);
}

register(user){
  return this.http.post("http://localhost:3000/user/signup", user)
}

login(un,pw){
  return this.http.post("http://localhost:3000/user/login", {username:un, password:pw});
}

getUserProductsA(user){
  return this.http.get("http://localhost:3000/market/sellerproductsA/"+ user);
}

getUserProductsS(user){
  return this.http.get("http://localhost:3000/market/sellerproductsS/"+ user);
}

addProduct(product){
  return this.http.post("http://localhost:3000/market/add/",product);
}

markSold(id){
  return this.http.get("http://localhost:3000/market/marksold/"+id)
}

editProduct(product){
  return this.http.post("http://localhost:3000/market/editproduct/", product)
}

deleteProduct(id){
  return this.http.get("http://localhost:3000/market/deleteproduct/"+id)
}
}

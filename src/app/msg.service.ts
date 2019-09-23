import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) { }

getCat(){
    return this.http.get("https://onlinemarketplace-server.herokuapp.com/market");
}

getProducts(cat){
    return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/products/"+cat);
}

getL(){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/loc");
}

getFiltered(x,loc_selected,search,category){
  return this.http.post("https://onlinemarketplace-server.herokuapp.com/market/filter/",{filter:x,location:loc_selected,search:search,category:category})
}

getSingleProduct(id){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/singleproduct/"+ id);
}

register(user){
  return this.http.post("https://onlinemarketplace-server.herokuapp.com/user/signup", user)
}

login(un,pw){
  return this.http.post("https://onlinemarketplace-server.herokuapp.com/user/login", {username:un, password:pw});
}

getUserProductsA(user){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/sellerproductsA/"+ user);
}

getUserProductsS(user){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/sellerproductsS/"+ user);
}

addProduct(product){
  return this.http.post("https://onlinemarketplace-server.herokuapp.com/market/add/",product);
}

markSold(id){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/marksold/"+id)
}

editProduct(product){
  return this.http.post("https://onlinemarketplace-server.herokuapp.com/market/editproduct/", product)
}

deleteProduct(id){
  return this.http.get("https://onlinemarketplace-server.herokuapp.com/market/deleteproduct/"+id)
}
}

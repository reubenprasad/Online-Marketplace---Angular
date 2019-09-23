import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {MarketComponent} from './market/market.component'
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import {SingleproductComponent} from './singleproduct/singleproduct.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {SellerComponent} from './seller/seller.component'

const routes: Routes = [
  { path : "",component:HomeComponent},
    { path : "login",component:LoginComponent},
    { path : "register",component:RegisterComponent} ,
    { path : "seller", component:SellerComponent},
  { path : "market",component:MarketComponent, children:[
    { path : "products/:cat",component:ProductsComponent},
    { path : "categories",component:CategoriesComponent},
    { path : "singleproduct/:id",component:SingleproductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

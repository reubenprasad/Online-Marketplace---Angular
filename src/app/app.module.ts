import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { ProductsComponent } from './products/products.component';
import {MsgService} from './msg.service';
import { CategoriesComponent } from './categories/categories.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketComponent,
    ProductsComponent,
    CategoriesComponent,
    SingleproductComponent,
    LoginComponent,
    RegisterComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [MsgService,FileSelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

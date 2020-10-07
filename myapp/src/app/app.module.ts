import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingCartComponent } from './Cart/shopping-cart/shopping-cart.component';
import { ProductComponent } from './Cart/product/product.component';
import { FilterComponent } from './Cart/filter/filter.component';

import { ProductItemComponent } from './Cart/product-item/product-item.component';
import { CartItemComponent } from './Cart/cart-item/cart-item.component';
import { CartComponent } from './Cart/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductComponent,
    FilterComponent,

    ProductItemComponent,

    CartItemComponent,

    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

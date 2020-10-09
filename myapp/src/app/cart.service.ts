import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './models/cart';
import { Product } from './models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {


  private readonly   url :string ="http://localhost:3000/carts"

  constructor(private http : HttpClient) { }


  getCartItem():Observable<Cart[]> {

return this.http.get<Cart[]>(this.url);

  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(this.url, { product });
  }
}

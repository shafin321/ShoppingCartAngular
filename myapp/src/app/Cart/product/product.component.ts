import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((products) => {
      this.productList = products;
    })

  }

}

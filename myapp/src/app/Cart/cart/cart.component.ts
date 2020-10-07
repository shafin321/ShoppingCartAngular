import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[


  ];

  cartTotal=0;
  constructor(private _msg: MessageService) { }

  ngOnInit(): void {
this._msg.getMsg().subscribe((product:Product)=>{

  this.AddProductToCart(product);
}

)
  }

AddProductToCart(product: Product){

  let productExists=false;

  for(let i in this.cartItems){

    if(this.cartItems[i].productId==product.id){

   this.cartItems[i].qty++;
   productExists=true
   break;
    }
  }

  if(!productExists){

    this.cartItems.push({
      productId:product.id,
     name:product.name,
     qty:1,
     price:product.price
    })


  }



  this.cartTotal=0;
  this.cartItems.forEach(item=>{
    this.cartTotal +=(item.qty * item.price)
  });
}


}

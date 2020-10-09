import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { MessageService } from 'src/app/message.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product; // productItem is data type of Product

  constructor(private _msg: MessageService, private cartService:CartService) { }

  ngOnInit(): void {
  }
 handleAddToCart(){
  this.cartService.addProductToCart(this.productItem).subscribe(() => {
    this._msg.sendMsg(this.productItem)
})



 }
}

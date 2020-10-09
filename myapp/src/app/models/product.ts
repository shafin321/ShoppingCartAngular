export class Product {
  id:number;
  name:string;
  descirption:string;
  price: number;
  imageUrl:string;


  constructor(id, name, description, price, imageUrl){

    this.id=id;
    this.name=name;
    this.descirption=description;
    this.price=price;
    this.imageUrl=imageUrl;

  }
}


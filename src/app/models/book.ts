export class  Book {
 id:string
    title:string;
    shortDescreption:string;
    longDescreption:string;
    author:string;
    price:string;
    inStock:string;
    constructor(title:string,
        shortDescreption:string,
        longDescreption:string,
        author:string,
        price:string,
        inStock:string,){
            this.title=title;
            this.shortDescreption=shortDescreption;
            this.longDescreption=longDescreption;
            this.author=author;
            this.price=price;
            this.inStock=inStock;
        };
 
  }
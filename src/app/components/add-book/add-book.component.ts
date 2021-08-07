import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from 'src/app/models/book';
import { BookService } from 'src/app/service/book-service.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title:string;
  shortDescreption:string;
  longDescreption:string;
  author:string;
  price:string;
  inStock:string;

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }
add(){
  let book=new Book(this.title,this.shortDescreption,this.longDescreption,this.author,this.price,this.inStock);
  console.log(book);
  let url="/book"
  this.bookService.insertData(book,url).subscribe(data=>{
    this.router.navigate(['/list']);
  })

}
}

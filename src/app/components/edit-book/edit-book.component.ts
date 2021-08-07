import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: any;
  book :any = {};
  title:string;
  shortDescreption:string;
  longDescreption:string;
  author:string;
  price:string;
  inStock:string;
  constructor(   private route: ActivatedRoute,
    private router: Router,
    private bookService:BookService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    let url="/book"
    this.bookService.getById(this.id,url).subscribe(data=>{
      this.book=data
      console.log(this.book);
      
    })
  
  }
  edit(){
    console.log(this.book.title);
    let book=new Book(this.book.title,this.book.shortDescreption,this.book.longDescreption,this.book.author,this.book.price,this.book.inStock);
    console.log(book);
    let url="/book";
    this.bookService.updateData(book,this.id,url).subscribe(data=>{
      this.router.navigate(['/list']);
    });

    
    
  }

}

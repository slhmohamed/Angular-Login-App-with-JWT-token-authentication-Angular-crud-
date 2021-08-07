import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  hideWhenNoStudent: boolean;
  noData: boolean;

  constructor(private bookService:BookService) { }
books:any;
p: number = 1;
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    let url ="/books";
    this.bookService.getAlll(url).subscribe(data=> {
      if(data.length <=0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      this.books=data;
console.log(this.books);
      }
    })
  }

  delete(id:string){
    let url="/book"
    this.bookService.deleteData(id,url).subscribe();
    this.getAll();


  }

}

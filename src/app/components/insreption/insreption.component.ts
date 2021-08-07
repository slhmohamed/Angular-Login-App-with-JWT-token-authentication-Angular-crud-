import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/register'; 
import { BookService } from 'src/app/service/book-service.service';
@Component({
  selector: 'app-insreption',
  templateUrl: './insreption.component.html',
  styleUrls: ['./insreption.component.css']
})
export class InsreptionComponent implements OnInit {
email:string;
password:string;
siteKey:string
name:string;
  constructor(private bookService:BookService) {
    this.siteKey = '6LcPDM4bAAAAADNqcKoehdpyBLEGNc63h6v-e5a0';
   }

  ngOnInit(): void {
  }
  register(){
    console.log(this.name);
    let user=new User(this.name,this.email,this.password);
    console.log(user);
    let url="/register"
    this.bookService.insertData(user,url).subscribe(data=>{
      console.log("Insertion bien effectuée");
      
    })
    
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/service/book-service.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;

invalidLogin: boolean;

errorLoginMessage: string;

  constructor(private authService:BookService,private router:Router) { }

  ngOnInit(): void {
 
    this.login();
  }

  login() {
    if (this.authService._isLogged()) {
      this.router.navigate(['/profile']);

    }
}
  Login(){
 
    this.invalidLogin = false;
   let user=new User(this.email,this.password)
   console.log(user);
   let url="/login"
this.authService.login(user,url).subscribe((result: any) => {


console.log(result);

  if (result) {


      this.login()
  }

  else
      this.invalidLogin = true;
} 
)
}

  }


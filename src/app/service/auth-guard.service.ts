import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BookService } from './book-service.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: BookService, private router: Router) {
  }

  canActivate(route: any, state: RouterStateSnapshot) {

    if (this.auth._isLogged()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;

  }


}

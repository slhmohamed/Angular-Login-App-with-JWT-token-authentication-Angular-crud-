import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './book-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor{

  constructor(private authService: BookService){
     
    
}
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('x-auth-token');
   
    if(token){
    req = req.clone({ headers: req.headers.set('x-auth-token',token) });}
    return next.handle(req);
}
}

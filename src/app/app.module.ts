import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InsreptionComponent } from './components/insreption/insreption.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ProfileComponent } from './components/profile/profile.component';
 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ListComponent } from './components/list/list.component';
import { AppHttpInterceptorService } from './service/app-http-interceptor.service';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AuthGuard } from './service/auth-guard.service';
import { NgxCaptchaModule } from 'ngx-captcha';
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inscreption', component: InsreptionComponent },
  { path: 'add', component: AddBookComponent,  canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent,  canActivate: [AuthGuard] },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,  canActivate: [AuthGuard]
 
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsreptionComponent,
 
    ProfileComponent,
    NavBarComponent,
    AddBookComponent,
    ListComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule   ,
    NgxCaptchaModule   ,
    NgxPaginationModule
  ],
  providers: [  {provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptorService,
    multi: true},
],
  bootstrap: [AppComponent]
})
export class AppModule { }

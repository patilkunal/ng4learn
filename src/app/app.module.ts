import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { TestcComponent } from './testc/testc.component';
import { MydirectDirective } from './mydirect.directive';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

import {CategoriesServiceService} from './services/categories-service.service';

import { MyHttpInterceptor } from './config/httpinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestcComponent,
    MydirectDirective,
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    routing
  ],
  providers: [ CategoriesServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

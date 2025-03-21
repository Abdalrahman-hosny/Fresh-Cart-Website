import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import{BrowserAnimationsModule}from "@angular/platform-browser/animations"
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './core/interceptors/myhttp.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { SearchPipe } from './core/pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule ,
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:MyhttpInterceptor , multi: true
    }, 
    {
      provide:HTTP_INTERCEPTORS ,useClass:LoadingInterceptor , multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

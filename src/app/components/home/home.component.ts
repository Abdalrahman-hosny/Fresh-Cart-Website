import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';

import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o'; 
import { Category } from 'src/app/core/interface/category';
import { product } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CuttextPipe , CarouselModule , RouterLink ,SearchPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
constructor(private _ProductService:ProductService  , private _CartService:CartService , private _ToastrService:ToastrService , private _Renderer2:Renderer2){}
products :product[]=[];
categories :Category[]=[];
term:string =''

  ngOnInit(): void {
    this._ProductService.getproduct().subscribe({

    next:(response)=>{
      console.log(  'products', response.data);
      this.products = response.data ;
        
    },
    
    })

    this._ProductService.getCategories().subscribe({

      next:(response)=>{


        this.categories = response.data;

      }
    })

  }

  addProduct(id:any  , element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(  element , 'disabled'  , 'true')

    this._CartService.addToCart(id).subscribe({
      next: (response)=>{
        console.log(response)
        console.log(response.message);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute( element , 'disabled');


        this._CartService.cartNumber.next(response.numOfCartItems)
      },

      error:(err)=>{
        this._Renderer2.removeAttribute( element , 'disabled');
      }
    })
  }



  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:7000,   
    autoplaySpeed:1000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

    mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:5000,   
    autoplaySpeed:1000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: false
  }




}

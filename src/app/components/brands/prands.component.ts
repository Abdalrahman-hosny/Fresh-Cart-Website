import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-prands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prands.component.html',
  styleUrls: ['./prands.component.scss']
})
export class PrandsComponent implements OnInit {
  constructor(private _ProductService:ProductService){}

  brandData:any[] = []

  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(response)=>{
        this.brandData =response.data
      }
    })
  }
  
}

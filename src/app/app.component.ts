import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Product } from './app.interface';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CardComponent, CommonModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() pricce: number = 0
  @Input() Sale: Date | undefined
  @Input() onSale!: boolean
 
  
  
  
  
  // @Input() newProduct: Product = {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   images: "",
  //   discountPercentage: 0,
  //   rating: 0,
  //   stock: 0,
  //   brand: '',
  //   thumbnail: '',
  //   onSale: false,
  //   Sale: new Date
  // }
  // @Input() anotherProduct: Product = {
  //   title: " headphones",
  //   price: 400,
  //   description: "some asdasdfasdd about text",

  //   images: "",

  //   id: 0,
  //   category: '',
  //   discountPercentage: 0,
  //   rating: 0,
  //   stock: 0,
  //   brand: '',
  //   thumbnail: '',
  //   onSale: false,
  //   Sale: new Date
  // }
  userName: string = ""

  extraOptions = {
    isWireless: false,
  hasWarranty:false  }

  shippingMethod = "express | standard "

  
  getInfo() {
    console.log(`Options: Warranty: ${this.extraOptions.hasWarranty}, 
      Wireless: ${this.extraOptions.isWireless},
      shipping Method: ${this.shippingMethod},
      username : ${this.userName}`)
    }
}

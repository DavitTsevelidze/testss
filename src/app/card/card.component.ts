import { Component, Input, input, OnInit } from '@angular/core';
import { Product } from '../app.interface';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ FormsModule, RouterOutlet, CommonModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() notSale : string = "This Item Not Sale"
  @Input() product!: Product
  @Input()onSale! : boolean | string
Skale: Date = new Date
  
  
  @Input() pricce: number = 0
  ratingSum!: string 

  title = 'execise';
 
  

// getInfo() {
//   console.log(`Options: Warranty: ${this.extraOptions.hasWarranty}, 
//     Wireless: ${this.extraOptions.isWireless},
//     shipping Method: ${this.shippingMethod},
//     username : ${this.userName}`)
  
 
  

calculatRating(ratings : number[]): string {
  const total = ratings.reduce((sum ,rating) => sum + rating, 0);
  return (total / ratings.length).toFixed(1);
 }
ngOnInit(): void {
  // this.ratingSum = this.calculatRating(this.product.rating)
  console.log("onint");
  
}
}

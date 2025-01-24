import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../app.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
 
  
products:Product[] = []
  ngOnInit(): void {
    this.products = this.getProducts()
  }
 getProducts(): Product[] {
  return[
    
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "Sale": new Date,
        "onSale": true,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ],
        
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD  ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "Sale": new Date,
        "onSale": false,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
      },
      {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to ",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "Sale": new Date,
        "onSale": false,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
          "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt421b5c5318c15f83/6501b50cdc211726e3c3158c/Sky_Mobile_PDP1_iPhone15Pro_Black_Titanium-PreOrder.png?imageManager=true&impolicy=resize&width=1000"
        ]
      },
      {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "Sale": new Date,
        "onSale": false,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
      },
      {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially the Universe the Universe ",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "Sale": new Date,
        "onSale": false,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
      },
      {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "Sale": new Date,
        "onSale": false,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/6/2.jpg",
          "https://i.dummyjson.com/data/products/6/3.png",
          "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
      },
      {
        "id": 7,
        "title": "Samsung Galaxy ",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "Sale": new Date,
        "onSale": false,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        ]
      },
      {
        "id": 8,
        "title": "Microsoft Surface ",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "Sale": new Date,
        "onSale": false,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        ]
      },
      {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Infinix",
        "Sale": new Date,
        "onSale": false,
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/9/2.png",
          "https://i.dummyjson.com/data/products/9/3.png",
          "https://i.dummyjson.com/data/products/9/4.jpg",
          "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        ]
      },
      {
        "id": 10,
        "title": "HP Pavilion ",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, ",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "Sale": new Date,
        "onSale": false,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/10/2.jpg",
          "https://i.dummyjson.com/data/products/10/3.jpg",
          "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
      },
      {
        "id": 11,
        "title": "perfume Oil",
        "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        "price": 13,
        "discountPercentage": 84,
        "rating": 4.26,
        "stock": 65,
        "Sale": new Date,
        "onSale": false,
        "brand": "Impression of Acqua Di Gio",
        "category": "fragrances",
        "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        "images": [
          "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=100",
          "https://i.dummyjson.com/data/products/11/2.jpg",
          "https://i.dummyjson.com/data/products/11/3.jpg",
          "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
        ]
      }
      

  ]


}

 
}

   

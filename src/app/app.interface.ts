export interface Product {
    id: number,
    title: string,
    category: string,
    discountPercentage:  number,
   rating: number,
   stock: number,
    description: string,
    price: number,
    brand: string,
   onSale:boolean,
   Sale: Date,
    thumbnail:string,
    images:string[] | any,

}
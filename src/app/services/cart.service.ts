import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Product added to cart', product);
  }

  getCart() {
    return this.cart;
  }
}

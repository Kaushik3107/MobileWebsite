import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css'],
})
export class PopularProductsComponent {
  products: any[] = [];
  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  addToWishlist(product: any) {
    this.wishlistService.addToWishlist(product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}

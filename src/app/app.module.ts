import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { FooterComponent } from './components/footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PopularProductsComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

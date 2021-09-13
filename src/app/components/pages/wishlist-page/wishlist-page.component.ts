import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';
import { WishListService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  private readonly notifier: NotifierService;
    products = this.wishListService.getItems();
    total = this.wishListService.getTotal();

    constructor(
        private wishListService: WishListService,
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onDeleteItem(productID: any) {
        this.wishListService.deleteFromCart(productID);
        this.notifier.notify('info', 'Your product removed from the wish list!');
        this.total = this.wishListService.getTotal();
    }

    addToCart(product: Product) {
      this.cartService.addToCart(product);
      this.wishListService.deleteFromCart(product.id);
      this.notifier.notify('info', 'Your product added to the cart!');
    }

}

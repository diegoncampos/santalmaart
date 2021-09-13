import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/wishlist.service';
import { CartService } from '../../../cart.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    cartProducts = this.cartService.getItems();
    wishList = this.wishListService.getItems();

    constructor(
        public router: Router,
        private cartService: CartService,
        private wishListService: WishListService
    ) { }

    ngOnInit(): void {
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}
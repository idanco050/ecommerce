import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { TokenStorageService } from '../services/token-storage.service';
import {SubscribeService} from '../services/subscribe.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private _token: TokenStorageService,
    private _auth: AuthService,
    private _cart: CartService,

    private sub: SubscribeService,
  ) {
    this.getScreenSize();
    this._auth.user.subscribe((user) => {
      if (user) { this.isLoggedIn = true; }
      else { this.isLoggedIn = false; }
    });
    this._cart.cartDataObs$.subscribe((cartData) => {
      this.cartData = cartData;
    });
  }
  screenHeight: any;
  screenWidth: any;
  isMenuOpen = false;
  isMobile = false;
  isLoggedIn = false;
  dropdownVisible = false;
  cartData: any;
  isSubOpen = false;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 768) { this.isMobile = false; }
    else { this.isMobile = true; }
  }

  ngOnInit(): void {
    if (this._token.getUser()) { this.isLoggedIn = true; }
    else { this.isLoggedIn = false; }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  removeProductFromCart(id: number) {
    this._cart.removeProduct(id);
  }

  logout() {
    this._auth.logout();
    this.isMenuOpen = false;
  }

  subClick()
  {
    this.sub.isSub =true;
}
showSubClick(){
    this.sub.isShowSub = true;
}
}

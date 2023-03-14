import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../services/subscribe.service'

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss']
})
export class SubscribePageComponent{

  fullName = '';
  email = '';
  favoriteCategory = '';

  constructor(private sub: SubscribeService) {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Favorite Category:', this.favoriteCategory);
    this.sub.isSub = false;
    this.sub.subscribe(this.fullName,this.email , this.favoriteCategory);
    // Add code to handle the form submission here, such as sending the data to a backend API
  }
}

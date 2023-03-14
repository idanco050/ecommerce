import { Component } from '@angular/core';
import {SubscribeService} from './services/subscribe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';


  constructor(private sub: SubscribeService) {
  }
  getSubState() {
    return this.sub.isSub;
  }
  getShowSubState(){
    return this.sub.isShowSub;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscribeService} from '../services/subscribe.service'

@Component({
  selector: 'app-dashboard',
  template: `<h1>Admin Dashboard</h1>

    <div *ngIf="data">
      <ul>
        <li *ngFor="let user of data">
          <strong>Name: {{ user.fullName }}        Email: {{ user.email }}</strong>
          <br />
          Favorite category: {{ user.favoriteCategory }}
        </li>
      </ul>
    </div>
  <button (click)="onClick()">Exit</button>

    <div *ngIf="!data">Loading data...</div>`,
  styles:[
    `
      button {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 4px;
        background-color: #4CAF50;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 10px;
      }

      button:hover {
        background-color: #3e8e41;
      }

    `
  ]
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient,private sub: SubscribeService ) {}

  ngOnInit() {
    this.http.get('http://localhost:5000/api/v1/subscribe').subscribe((response) => {
      this.data = response;
    });
  }

  onClick(){
    this.sub.isShowSub = false;
  }
}


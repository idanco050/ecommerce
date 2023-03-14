import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="backdrop" *ngIf="showBackdrop"></div>
    <div class="card" *ngIf="!buttonClicked">
      <div class="card-header">
        <img src="/assets/cookie.jpg" alt="Card Image" class="card-image" />
        <h3>{{ title }}</h3>
        <h6>{{ subTitle }}</h6>
      </div>
      <div class="card-body">
        <button class="btn" (click)="approveMsg()">Sweet.. Cookies!</button>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        margin: 10px;
        overflow: hidden;
        width: 300px;
        z-index: 1000;
        position: relative;
      }
      .card-header {
        background-color: #f2f2f2;
        padding: 10px;
      }
      .btn {
        background-color: blue;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 5px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .card-body {
        padding: 10px;
        background-color: #f2f2f2;
      }
      .card-image {
        height: 200px;
        width: 260px;
      }
      .backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
    `,
  ],
})
export class CardComponent {
  // Variables
  @Input() title: string;
  @Input() subTitle: string;
  showBackdrop = true;
  buttonClicked: boolean = false;

  constructor() {
    this.title = '';
    this.subTitle = '';
  }

  // Methods
  approveMsg() {
    this.toggleBackdrop();
    this.buttonClicked = true;
    alert('Yummy! Enjoy Your Stay');
  }

  toggleBackdrop() {
    this.showBackdrop = !this.showBackdrop;
  }
}



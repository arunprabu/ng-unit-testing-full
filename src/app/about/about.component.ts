import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h2 style="background-color: yellow;">{{pageName}} | Testing Methods, Timeout, Triggering Event</h2>

      <h1>{{ value }}</h1>
      <hr>
      <button (click)="increment()" class="increment">Increment</button>
      <button (click)="decrement()" class="decrement">Decrement</button>
      <p class="message">{{ message }}</p>

      <p>{{ dummyText | ellipsis: 20 }}</p>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  pageName = '';
  city = '';
  value = 0;
  message = '';

  dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
  
  constructor() { }

  ngOnInit(): void {
    this.pageName = 'About Us';
    setTimeout(()=>{
      this.city = 'London';
    }, 3000);
  }

  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }

}

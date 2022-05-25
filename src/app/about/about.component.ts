import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h2>{{pageName}}</h2>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  pageName = '';
  
  constructor() { }

  ngOnInit(): void {
    this.pageName = 'About Us';
  }

}

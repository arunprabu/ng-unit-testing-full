import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h2 style="background-color: yellow;">{{pageName}}</h2>
    </div>
  `,
  styles: [
    `.heading2{
      background-color: 'yellow';
    }
    `
  ]
})
export class AboutComponent implements OnInit {

  pageName = '';

  city = '';
  
  constructor() { }

  ngOnInit(): void {
    this.pageName = 'About Us';
    setTimeout(()=>{
      this.city = 'London';
    }, 3000);
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styles: [
  ]
})
export class CalcComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  add(a: number | string, b: number | string): number | string {
    if(typeof a == "number" && typeof b == "number"){
      return a + b;
    }else{
      return 'Wrong Input';
    }
  }

  // TODO: Complete Division 10, 5
  // TODO: Try with  0, 0 - Check whether it is NaN or not 

}

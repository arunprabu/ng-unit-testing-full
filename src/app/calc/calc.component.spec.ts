import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

xdescribe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CalcComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing whether add method working properly
  it('should add two numbers properly', () => {
    // Sometimes multiple expectations / assertions are Recommended
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(4, 3)).toEqual(7);
  });

  // testing whether add method receives numbers as inputs
  it('handles invalid inputs', () => {
    expect(component.add("4","*")).toEqual('Wrong Input');
  });

  // testing whether add method returns number value of type number
  it('should add properly and return number', () => {
    //checking the return type
    expect(component.add(10, 20)).not.toBeNaN();
  });

});

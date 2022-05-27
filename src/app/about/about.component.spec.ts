import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

// if you have nested describe it will violate Single Responsibility Principle of Unit Testing
xdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`has pageName as 'About Us'`, () => {
    expect(component.pageName).toEqual('About Us');
  });

  it('has About Us in h2', () => {
    const template = fixture.nativeElement as HTMLElement;
    expect(template.querySelector('h2')?.textContent).toContain('About Us');
  });

  // // Approach #1
  it('has London as city #1', fakeAsync(() => {
    component.ngOnInit();
    tick(3100);
    expect(component.city).toEqual('London');
  }));

  // Approach #2
  it(`has London as City #2 `, ((done) => {
    console.log('### start test');
    fixture.detectChanges();
    // call a method which has async code
    component.ngOnInit();
    setTimeout(() => {
      console.log('isStable', fixture.isStable());
      console.log('### end test');
      expect(component.city).toEqual('London');
      done();
    }, 3100)
  }));

  // test whether the element has bg color yellow
  it('should have yellow bg in <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should increment and decrement value', () => {
    component.increment();
    expect(component.value).toEqual(1);

    component.decrement();
    expect(component.value).toEqual(0);
  });

  // TODO: Try checking whether the element has 'redText' class 


  it('should increment and decrement value', () => {
    component.increment();
    expect(component.value).toEqual(1);

    component.decrement();
    expect(component.value).toEqual(0);
  });

  it('should increment value in template', () => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null); // triggering click event thru pgm 

    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  it('should stop at 0 and show minimum message', () => {
    debugElement
      .query(By.css('button.decrement'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(component.value).toEqual(0);
    expect(message).toContain('Minimum');
  });

  it('should stop at 15 and show maximum message', () => {
    fixture.componentInstance.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);
      
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(component.value).toEqual(15);
    expect(message).toContain('Maximum');
  });
});

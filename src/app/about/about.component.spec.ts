import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { AboutComponent } from './about.component';

// if you have nested describe it will violate Single Responsibility Principle of Unit Testing
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

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

  // Approach #1
  it('has London as city 1', fakeAsync(() => {
    component.ngOnInit();
    tick(3001);
    expect(component.city).toEqual('London');
  }));

  // Approach #1
  it(`has London as City 2 `, ((done) => {
    console.log('### start test');
    fixture.detectChanges();
    // call a method which has async code
    component.ngOnInit();
    setTimeout(() => {
      console.log('isStable', fixture.isStable());
      console.log('### end test');
      expect(component.city).toEqual('London');
      done();
    }, 3001)
  }));

  // test whether the element has bg color yellow
  it('should have yellow bg in <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
});

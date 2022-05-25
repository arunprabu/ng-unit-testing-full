import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
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
});

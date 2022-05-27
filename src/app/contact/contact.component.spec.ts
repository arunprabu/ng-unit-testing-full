import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

xdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    // the following is similar to your feature module on the unit testing side
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted status to true', () => {
    component.handleSubmit();
    expect(component.isSubmitted).toBeTruthy();
  });

  it('should call the handleSubmit method', () =>{
    spyOn(component, 'handleSubmit'); // Install a spy onto an existing object.

    const btnEl = fixture.debugElement.query(By.css('#submitBtn')).nativeElement;
    btnEl.click();
    expect(component.handleSubmit).toHaveBeenCalled();
  });

  it('Form should be invalid if required fields not filled properly', () =>{
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['query'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('Form should be valid if required fields are filled properly', () =>{
    component.contactForm.controls['name'].setValue('Arun');
    component.contactForm.controls['email'].setValue('a@b.com');
    component.contactForm.controls['query'].setValue('testing..');
    expect(component.contactForm.valid).toBeTruthy();
  });

});

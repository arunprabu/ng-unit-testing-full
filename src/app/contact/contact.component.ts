import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  contact = {
    name: '',
    email: '',
    query: ''
  };

  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'query': new FormControl(this.contact.query, Validators.required)
    });
  }

  handleSubmit(): void{
    this.isSubmitted = true;
    console.log(this.contactForm.valid);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) {

  }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name: new FormControl('nucleya', Validators.required),
      phone: new FormControl('123', Validators.required),
      email: new FormControl('nucleya@juke.com', [Validators.required, Validators.email])
    });

  }

  addContactHandler(): void {
    console.log(this.contactForm.value);
    this.contactService.createContact(this.contactForm.value)
      .subscribe((res: Contact) => {
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });

  }
}

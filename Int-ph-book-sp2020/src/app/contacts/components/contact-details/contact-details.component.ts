import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  deleteContactName: Contact;
  isUpdated: boolean;
  isDeleted: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Read url paramater
    const contactID = this.route.snapshot.paramMap.get('id');

    console.log('Inside ngOnInit');
    // Seend ajax calls
    this.contactService.getContactById(contactID)
      .subscribe((res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: Contact) => {
        console.log(res);
        if (res) {
          this.isUpdated = true;
        }
      });
  }


  // deleteContactHandler(): void {
  //   console.log(this.deleteContactName);

  //   this.contactService.deleteContact(this.duplicateContactData)
  //     .subscribe((res: Contact) => {
  //       console.log(res);
  //       if (res) {
  //         this.isDeleted = true;
  //       }
  //     });
  // }



}

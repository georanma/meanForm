import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactsService} from './contacts.service';
//import {Contacts} from './contacts'
//import {FormBuilder, Validators} from '@angular/common';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Contacts` component loaded asynchronously');

@Component({
  selector: 'contacts',
  providers: [ContactsService],
  templateUrl: './contacts.template.html'
})
export class Contacts {
  
  
  formSlide = 0;  //intiate slide count 

  contacts = null;


  // Increament slide count to show or hide question slides
  slideIncrement(){
    this.formSlide += 1;
    console.log(this.formSlide);
  }



  constructor(private _contactsService: ContactsService) {
    this.contacts = _contactsService;

  }

  onSubmit(): void {
    this.contacts.addContact();
  }

  addContact() {
    
    console.log();
    console.log('Add Contacts Ran 2');
     this.contacts.addContact()
     .subscribe(
      err => console.log(err));
  }


  // getContacts() {
  //   this._ContactsService.getContacts();
  //     .subscribe(
  //     contact => this.contact = contact,
  //     error => this.errorMessage = <any>error);
  // }
  

}

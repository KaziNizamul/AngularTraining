import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }


  createContact(contactData: Contact): Observable<Contact> {
    console.log(contactData);
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }


  getContacts(): Observable<Contact[]> {
    console.log('Inside getContacts');
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => {
        console.log(res);
        return res;
      }));
  }

  getContactById(id: string): Observable<Contact> {
    console.log(id);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;

    return this.http.get(CONTACT_DETAILS_URL)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }


  updateContact(updatableContactData: Contact): Observable<Contact> {
    console.log(updatableContactData);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updatableContactData.id}`;
    return this.http.put(CONTACT_DETAILS_URL, updatableContactData)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }


  // deleteContact(deletedContactName: Contact): Observable<Contact> {
  //   console.log(deletedContactName);
  //   const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${deletedContactName.id}`;
  //   return this.http.delete<number>(CONTACT_DETAILS_URL, deletedContactName)
  //     .pipe(map((res) => {
  //       console.log(res);
  //       return res;
  //     }));
  //   }


  //  deleteContact(id: Contact): Observable<Contact> {
    // deleteContact(id: Contact): del<any> {
    // console.log(id);
    // // const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${deletedContactName.id}`;
    // // return this.http.delete<number>(CONTACT_DETAILS_URL, deletedContactName)
    // //   .pipe(map((res) => {
    // //     console.log(res);
    // //     return res;
    // //   }));

    // const deleteContact =  new deleteContact( (resolve, reject)=>{
    //   return this.http.delete(CONTACT_DETAILS_URL, id)
    //   .then( (res: Contact)=> {
    //     console.log(res);
    //     resolve('deleted successfully!');
    //   })
    // })



    // }


  // deleteContact(id): Promise<string> {
  //   console.log(id);
  //   const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;
  //   const del = new Promise( (resolve, reject) => {
  //     return this.http.delete(CONTACT_DETAILS_URL)
  //     .toPromise()
  //     .then(( res: any) => {
  //       console.log(res);
  //       resolve('deleted yo.');
  //     })
  //     .catch((err:any)=>{
  //       console.log(err);
  //       reject(err);
  //     })
  //     .finally(()=> {
  //       console.log('done.');
  //     });
  //   });
  //   return del as Promise<string> ;
  // }

}
  

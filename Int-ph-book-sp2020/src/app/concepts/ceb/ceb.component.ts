import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styleUrls: ['./ceb.component.css']
})
export class CebComponent implements OnInit {

  @Output() profileLoad = new EventEmitter();


  constructor() {
    console.log('inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
  }

  sendDataHandler() {
    this.profileLoad.emit('sir your name plz! oh i know! its kz');
  }


}

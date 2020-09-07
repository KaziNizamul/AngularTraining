import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
            <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-menu>
      <p  class="greyText">  Copyright 2020 | L&T </p>
      <a href="https://notepad.pw/lntngnote" class="btn btn-lg">My todo Tasks </a>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

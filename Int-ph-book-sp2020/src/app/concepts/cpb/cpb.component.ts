import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styleUrls: ['./cpb.component.css']
})
export class CpbComponent implements OnInit {

  constructor() { }

  @Input() age=25;


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  constructor() { }

  // INTERPOLATION
  appName: any = 'phonebook-app interpolation example works!';


  // PROPERTY BINDING
  propertyBinding = 'property Binding works!';


  // EVENT BINDING
  // example1
  showdata(): void {
    alert('event binding WORKS!');
  }

  // example2
  todoTask(): void {
    // alert('Todo Completed!');
    document.getElementById('eventTodo').innerHTML = 'Button Clicked!';
    //  document.getElementById("eventTodo").disabled = true;
  }

  // TWO WAY BINDING
  courseName = '2 Way Binding Example';


  //DIRECTIVE EXAMPLE 
  logdata: boolean = true;

  skill: any[] = ['html', 'css', 'js'];



  ngOnInit(): void {
  }








  // child parent communication...
  // tslint:disable-next-line: member-ordering
  profileName: any;
  profileLoadHandler(evt): void {
    console.log(evt);
    this.profileName = evt;
  }


}

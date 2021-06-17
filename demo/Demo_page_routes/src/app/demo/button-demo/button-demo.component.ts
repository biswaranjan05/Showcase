import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {
  elements: any = [
    { id: 1, first: 'Biswa', last: 'Ranjan', age: '25' },
    { id: 2, first: 'Bibhuti', last: 'Bhusan', handle: '28' },
    { id: 3, first: 'Lionel', last: 'Messi', handle: '30' }
  ];

  headElements = ['ID', 'First', 'Last', 'Age'];
  constructor() {}

  ngOnInit() {}
}

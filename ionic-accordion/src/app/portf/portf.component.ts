import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portf',
  templateUrl: './portf.component.html',
  styleUrls: ['./portf.component.scss']
})
export class PortfComponent implements OnInit {
  datas = [
    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      text: 'Write reply ...',
      date: '17/03/2020'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

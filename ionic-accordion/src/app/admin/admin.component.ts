import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users = [
    {
      curr: 'Indian Rupee'
    }
  ];
  language = [
    {
      lang: 'English'
    },
    {
      lang: 'Spanish'
    },
    {
      lang: 'Hindi'
    },
    {
      lang: 'Odia'
    }
  ];

  times = [
    {
      time: '(UTC-11:00)Midway Island'
    },
    {
      time: '(UTC-11:00)Midway Island'
    },
    {
      time: '(UTC-11:00)Midway Island'
    },
    {
      time: '(UTC-11:00)Midway Island'
    },
    {
      time: '(UTC-11:00)Midway Island'
    }
  ];
  constructor() {}

  ngOnInit() {}
}

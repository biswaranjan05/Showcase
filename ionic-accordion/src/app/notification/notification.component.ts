import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  datas = [
    {
      icon: 'assets/bg.png',
      name: 'Biswa',
      text: 'Here are some text contents to be sorted .',
      date: '17/03/2020'
    },

    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Sai',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    },

    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Vighnesh ',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    },
    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Amaan',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    },
    {
      icon: 'assets/haaye.jpg',
      name: 'Biswa',
      // tslint:disable-next-line: max-line-length
      text:
        'Wishing you the happiest birthday...Wish you will achieve all your goals.Give just one chance to this man n he will be always there for you. ',
      date: '23/07/2020'
    },
    {
      icon: 'assets/hey2.jpg',
      name: 'Biswa',
      text: 'Your photo is not enough to show my love for you. Love you forever sruti ..happy birthday ',
      date: '23/07/2020'
    },
    {
      icon: 'assets/ekk(3).jpg',
      name: 'Biswa',
      text: 'Happy birthday to someone who I really admire .',
      date: '23/07/2020'
    },
    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Biswa',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    },
    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Biswa',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    },
    {
      icon: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Biswa',
      text: 'Here are some text contents to be sorted',
      date: '17/03/2020'
    }
  ];

  condition = true;

  constructor() {}

  ngOnInit() {}
}

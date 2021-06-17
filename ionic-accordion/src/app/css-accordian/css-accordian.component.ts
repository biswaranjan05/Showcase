import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-accordian',
  templateUrl: './css-accordian.component.html',
  styleUrls: ['./css-accordian.component.scss']
})
export class CssAccordianComponent implements OnInit {
  texts = [
    {
      // tslint:disable-next-line: max-line-length
      sum:
        "You see out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here."
    }
  ];

  constructor() {}

  ngOnInit() {}
}

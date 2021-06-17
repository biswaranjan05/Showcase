import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  inputval: any;
  display: any;
  cssClass: 'mouse';
  constructor() {}
  save() {
    this.display = this.inputval;
  }

  ngOnInit() {}
}

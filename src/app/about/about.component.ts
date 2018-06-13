import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  awesomeThings : string[] = ['HTML5 Boilerplate',
      'Angular 6',
      'Karma'];
  constructor() { }

  ngOnInit() {
  }

}

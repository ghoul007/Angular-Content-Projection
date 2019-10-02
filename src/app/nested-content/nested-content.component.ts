import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-content',
  templateUrl: './nested-content.component.html',
  styleUrls: ['./nested-content.component.scss']
})
export class NestedContentComponent implements OnInit {
  date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  @Input() content;
  enable: boolean;
  constructor() { }

  ngOnInit() {
    this.enable = false;
  }

}

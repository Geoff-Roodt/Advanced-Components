import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling-demo',
  template: `
    <inline-style></inline-style>
    <external-style></external-style>
    <native-encapsulation></native-encapsulation>
    <no-encapsulation></no-encapsulation>
  `
})
export class StylingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-features',
  template: `
  <router-outlet></router-outlet>
`,
})
export class UiFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

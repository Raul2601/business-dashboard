import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css']
})
export class PopoversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // (<any>$('[data-toggle="popover"]')).popover()
  }

}

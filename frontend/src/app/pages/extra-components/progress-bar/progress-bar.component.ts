import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  height = '20px';
  value = 25;

  constructor() { }

  ngOnInit(): void {
  }

  subtract() {
    if (this.value >= 25) {
      this.value -= 25;
    }
  }

  add() {
    if (this.value <= 75) {
      this.value += 25;
    }
  }
}

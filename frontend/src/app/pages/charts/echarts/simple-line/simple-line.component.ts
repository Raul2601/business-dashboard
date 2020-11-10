import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-line',
  templateUrl: './simple-line.component.html',
  styleUrls: ['./simple-line.component.css']
})
export class SimpleLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'center',
      data: ['First Line', 'Second Line', 'Third Line']
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: { show: false },
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'log',
      name: 'y',
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: true
      }
    },
    series: [
      {
        name: 'First Line',
        type: 'line',
        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
      },
      {
        name: 'Second Line',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
      },
      {
        name: 'Third Line',
        type: 'line',
        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
      }
    ]
  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-customized',
  templateUrl: './pie-customized.component.html',
  styleUrls: ['./pie-customized.component.css']
})
export class PieCustomizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  option = {
    backgroundColor: '#2c343c',

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'test',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '335' },
          { value: 310, name: '310' },
          { value: 274, name: '274' },
          { value: 235, name: '235' },
          { value: 400, name: '400' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

}

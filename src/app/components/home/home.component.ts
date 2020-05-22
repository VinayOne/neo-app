import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyChart = [];
  stockChart = [];

  constructor() { }

  ngOnInit(): void {
    
    this.companyChart = new Chart("companyChart", {
      type: 'bar',
      data: {
          labels: ['1998', '1999', '2000', '2001', '2002', '2003'],
          datasets: [{
              label: 'Profit',
              data: [250, 100, 200, 400, 450, 500],
              backgroundColor: [
                  'rgba(132, 146, 166, 1)',
                  'rgba(132, 146, 166, 1)',
                  'rgba(132, 146, 166, 1)',
                  'rgba(132, 146, 166, 1)',
                  'rgba(132, 146, 166, 1)',
                  'rgba(132, 146, 166, 1)'
              ],
              borderColor: [
                 'rgba(132, 146, 166, 1)',
                 'rgba(132, 146, 166, 1)',
                 'rgba(132, 146, 166, 1)',
                 'rgba(132, 146, 166, 1)',
                 'rgba(132, 146, 166, 1)',
                 'rgba(132, 146, 166, 1)'
              ],
              borderWidth: 0
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  //stock chart
  this.stockChart = new Chart("stockChart", {
    type: 'bar',
    data: {
        labels: ['1998', '1999', '2000', '2001', '2002', '2003'],
        datasets: [{
            label: 'Profit',
            data: [250, 100, 200, 400, 450, 500],
            backgroundColor: [
                'rgba(132, 146, 166, 1)',
                'rgba(132, 146, 166, 1)',
                'rgba(132, 146, 166, 1)',
                'rgba(132, 146, 166, 1)',
                'rgba(132, 146, 166, 1)',
                'rgba(132, 146, 166, 1)'
            ],
            borderColor: [
               'rgba(132, 146, 166, 1)',
               'rgba(132, 146, 166, 1)',
               'rgba(132, 146, 166, 1)',
               'rgba(132, 146, 166, 1)',
               'rgba(132, 146, 166, 1)',
               'rgba(132, 146, 166, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

  }

}

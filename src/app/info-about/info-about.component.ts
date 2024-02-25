import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
  selector: 'app-info-about',
  templateUrl: './info-about.component.html',
  styleUrls: ['./info-about.component.css']
})
export class InfoAboutComponent {
  public lineChartData: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      x: {
        ticks: {
          callback: function(value: any) {
            return value.toString().substring(0, 12); // Отображение только первых 12 символов
          },
        },
      },
    },
  };
  public lineChartLegend = true;
  public timezoneOffset = 0;

  updateChartData() {
    const dates = [
      new Date('2022-01-01T00:00:00Z'),
      new Date('2022-02-01T00:00:00Z'),
      new Date('2022-03-01T00:00:00Z'),
      new Date('2022-04-01T00:00:00Z'),
      new Date('2022-05-01T00:00:00Z'),
      new Date('2022-06-01T00:00:00Z'),
      new Date('2022-07-01T00:00:00Z'),
    ];

    this.lineChartData = {
      labels: dates.map(date => this.formatDate(date)),
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        },
      ],
    };
  }

  formatDate(date: Date): string {
    const adjustedDate = new Date(date.getTime() + this.timezoneOffset * 60 * 60 * 1000);
    return adjustedDate.toISOString().substring(0, 19).replace('T', ' ');
  }

  switchTimezone(timezone: string) {
    switch (timezone) {
      case 'UTC':
        this.timezoneOffset = 0;
        break;
      case 'Kyiv+2':
        this.timezoneOffset = 2;
        break;
      case 'Kyiv+3':
        this.timezoneOffset = 3;
        break;
      default:
        this.timezoneOffset = 0;
        break;
    }

    this.updateChartData();
  }


  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  public barChartLegend = true;
  public barChartPlugins = [];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 350, 450, 100 ], label: 'Series A' },
    { data: [ 50, 150, 120 ], label: 'Series B' },
    { data: [ 250, 130, 70 ], label: 'Series C' }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];


  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: false,
    scales: {
      x: {
        min: 0,
        max: 30,
      },
      y: {
        min: 0,
        max: 30,
      }
    }
  };
  public bubbleChartLegend = true;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3},
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: false,
  };
  constructor() {
  }
}

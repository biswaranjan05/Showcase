import { Component, OnInit } from '@angular/core';
import 'chart.js';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  private barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  private barChartType: string = 'bar';
  private barChartLegend: boolean = true;

  private barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() {}

  ngOnInit() {}

  // events
  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }
}

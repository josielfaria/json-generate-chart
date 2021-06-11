import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @Input() config: Chart.ChartConfiguration;
  @Input() title = 'Titulo do Chart';
  @Input() data = new DataChart();


  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  chart: Chart;

  ngAfterViewInit(): void {
    this.configureChart();
  }

  private getDefaultConfig(): Chart.ChartConfiguration {
    const config: Chart.ChartConfiguration = {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true, legend: { position: 'bottom' },
        scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
      }
    };

    return config;
  }

  private configureChart(): void {
    const config = this.config || this.getDefaultConfig();
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, config);
  }

  updatadeData(dataChart: DataChart): void {
    while (this.data.datasets.length > 0) {
      this.data.datasets.pop();
    }

    while (this.data.labels.length > 0) {
      this.data.labels.pop();
    }

    for (const data of dataChart.datasets) {
      this.data.datasets.push(data);
    }

    if (dataChart.labels) {
      for (const label of dataChart.labels) {
        this.data.labels.push(label);
      }
    }

    this.chart.update();
  }
}

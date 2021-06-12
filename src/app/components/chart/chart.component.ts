import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, AfterViewInit {

  @Input() config: Chart.ChartConfiguration;
  @Input() title = 'Titulo do Chart';
  @Input() data: DataChart; // Receive datasets

  dataChart = new DataChart();

  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  chart: Chart;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.firstChange) {
      this.updatadeData();
    }
  }

  ngAfterViewInit(): void {
    this.configureChart();
  }

  private getDefaultConfig(): Chart.ChartConfiguration {
    const config: Chart.ChartConfiguration = {
      type: 'bar',
      data: this.dataChart,
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

  updatadeData(): void {
    while (this.dataChart.datasets.length > 0) {
      this.dataChart.datasets.pop();
    }

    while (this.dataChart.labels.length > 0) {
      this.dataChart.labels.pop();
    }

    for (const data of this.data.datasets) {
      this.dataChart.datasets.push(data);
    }

    if (this.data.labels) {
      for (const label of this.data.labels) {
        this.dataChart.labels.push(label);
      }
    }

    this.chart.update();
  }
}

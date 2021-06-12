import { Component } from '@angular/core';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  dataChart = new DataChart();

  setDataChart(data): void {
    this.dataChart = data;
  }

}

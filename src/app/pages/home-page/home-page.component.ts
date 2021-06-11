import { Component, OnInit } from '@angular/core';
import { DataChart } from 'src/app/shared/models/data-chart.model copy';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dataChart = new DataChart();

  ngOnInit(): void {
    const data = new DataChart();
    data.labels = ['labels4', 'labels5', 'labels6'];
    data.datasets = [{ data: [51, 31, 44], label: 'valor', backgroundColor: '#607d8b' }];

    this.dataChart = data;
    console.log('this.dataChart2', this.dataChart);
  }

}

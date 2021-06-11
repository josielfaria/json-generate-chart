import { Component, OnInit } from '@angular/core';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dataChart = new DataChart();

  ngOnInit(): void {
    const data = new DataChart();

    data.addDataset(['labels4', 'labels5', 'labels6'], [51, 31, 44], 'valor');
    data.addDatasetColumn([51, 31, 44], 'quantidade', '#8bc34a');

    this.dataChart = data;
  }

}

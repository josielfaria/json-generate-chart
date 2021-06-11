import { ChartDataSets } from 'chart.js';

export class DataChart {
  labels: Array<string>;
  datasets: ChartDataSets[];

  constructor() {
    this.labels = [];
    this.datasets = [{data: [], label: '', backgroundColor: '#607d8b'}];
  }
}

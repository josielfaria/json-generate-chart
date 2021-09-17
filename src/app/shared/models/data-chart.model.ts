import { ChartDataSets } from 'chart.js';
import * as Utils from '../utils/chartjs.util';

const COLOR_DEFAULT = Utils.CHART_COLORS.blue;

export class DataChart {
  labels: Array<string>;
  datasets: ChartDataSets[];

  constructor() {
    this.labels = [];
    this.datasets = [];
  }

  /**
   * Add as Dataset
   * @description Esse metodo adiciona um dataset no grafico.
   */
  setColumnsLabels(labels: string[]): void {
    this.labels = labels;
  }

  /**
   * Add as Dataset
   * @description Esse metodo adiciona um dataset no grafico.
   */
  addDataset(data: number[], label: string, color?: string): ChartDataSets[] {
    const colorChanged = color ? color : COLOR_DEFAULT;
    this.datasets.push({
      data,
      label,
      borderColor: colorChanged,
      backgroundColor: Utils.transparentize(colorChanged, 0.5),
      borderWidth: 2,
      radius: 5,
      borderSkipped: 'bottom'
    });

    return this.datasets;
  }

}

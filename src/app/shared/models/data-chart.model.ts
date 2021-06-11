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
  addDataset(labels: string[], data: number[], label: string, color?: string): ChartDataSets[] {
    const colorChanged = color ? color : COLOR_DEFAULT;
    this.labels = labels;
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

  /**
   * Add as Dataset Column
   * @description Esse metodo adiciona uma coluna ao dataset existente
   */
  addDatasetColumn(data: number[], label: string, color?: string): ChartDataSets[] {
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

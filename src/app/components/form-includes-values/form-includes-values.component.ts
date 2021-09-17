import { Component, EventEmitter, Output } from '@angular/core';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-form-includes-values',
  templateUrl: './form-includes-values.component.html',
  styleUrls: ['./form-includes-values.component.scss']
})
export class FormIncludesValuesComponent {
  panelOpenState = true; // TODO: true only for mock

  @Output() dataChartEmitter = new EventEmitter();

  columns = [{ value: '' }];
  itensColumns = [{ name: '', values: [ 0 ] }];

  teste(): void { // TODO: remove mock
    const data = new DataChart();
    data.setColumnsLabels(['columns-labels-1', 'columns-labels-2', 'columns-labels-3']);
    data.addDataset([51, 31, 44], 'valor');
    data.addDataset([11, 41, 24], 'quantidade', '#8bc34a');

    this.dataChartEmitter.emit(data);
  }

  prepareObj(): void {
    const columns = [];
    const itensColumns = [];
    const itensLabelsColumns = [];
    const colorsItensColumns = [];

    const item = { labelItemColumn: '', value: 0, };
  }

  addColumnsLabels(): void {
    this.columns.push({ value: '' });
  }

  addItensColumns(): void {
    this.itensColumns.push({ name: '', values: [ 0 ] });
  }

  addValueItens(): void { }
}

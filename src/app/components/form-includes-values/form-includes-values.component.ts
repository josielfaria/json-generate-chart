import { Component, EventEmitter, Output } from '@angular/core';
import { DataChart } from 'src/app/shared/models/data-chart.model';

@Component({
  selector: 'app-form-includes-values',
  templateUrl: './form-includes-values.component.html',
  styleUrls: ['./form-includes-values.component.scss']
})
export class FormIncludesValuesComponent {
  panelOpenState = false;

  @Output() dataChartEmitter = new EventEmitter();

  teste(): void { // TODO: remove mock
    const data = new DataChart();
    data.addDataset(['labels4', 'labels5', 'labels6'], [51, 31, 44], 'valor');
    data.addDatasetColumn([51, 31, 44], 'quantidade', '#8bc34a');

    this.dataChartEmitter.emit(data);
  }
}

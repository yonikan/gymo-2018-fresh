import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LineChartWidgetComponent } from './line-chart-widget.component';
import { MaterialModule } from '../../../shared/material.module';
import { AppChartWidgetModule } from '../chart-widget/chart-widget.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Chart Widget Style
    AppChartWidgetModule
  ],
  declarations: [LineChartWidgetComponent],
  exports: [LineChartWidgetComponent]
})
export class LineChartWidgetModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BarChartWidgetComponent } from './bar-chart-widget.component';
import { MaterialModule } from '../../../shared/material.module';
import { AppChartWidgetModule } from '../chart-widget/chart-widget.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Chart Widget Style
    AppChartWidgetModule
  ],
  declarations: [BarChartWidgetComponent],
  exports: [BarChartWidgetComponent]
})
export class BarChartWidgetModule {
}

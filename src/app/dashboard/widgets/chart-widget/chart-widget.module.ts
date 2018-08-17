import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

import {
  AppChartWidget,
  AppChartWidgetContent,
  AppChartWidgetHeader,
  AppChartWidgetHeaderActions,
  AppChartWidgetHeaderSubTitle,
  AppChartWidgetHeaderTitle
} from './chart-widget.component';

const chartWidgetComponents = [
  AppChartWidget,
  AppChartWidgetHeader,
  AppChartWidgetHeaderActions,
  AppChartWidgetHeaderSubTitle,
  AppChartWidgetHeaderTitle,
  AppChartWidgetContent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [...chartWidgetComponents],
  exports: [  AppChartWidget,
    AppChartWidgetHeader,
    AppChartWidgetHeaderActions,
    AppChartWidgetHeaderSubTitle,
    AppChartWidgetHeaderTitle,
    AppChartWidgetContent]
})
export class AppChartWidgetModule {
}

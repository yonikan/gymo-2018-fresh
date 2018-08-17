import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

import { BarChartWidgetOptions } from '../widgets/bar-chart-widget/bar-chart-widget-options.interface';
import { LineChartWidgetOptions } from '../widgets/line-chart-widget/line-chart-widget-options.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  salesData$: Observable<ChartData>;
  totalSalesOptions: BarChartWidgetOptions = {
    title: 'Total Sales',
    gain: 16.3,
    subTitle: 'compared to last month',
    background: '#5C6BC0',
    color: '#FFFFFF'
  };

  visitsData$: Observable<ChartData>;
  totalVisitsOptions: LineChartWidgetOptions = {
    title: 'Visits',
    gain: 42.5,
    subTitle: 'compared to last month',
    background: '#00BCD4',
    color: '#FFFFFF'
  };

  clicksData$: Observable<ChartData>;
  totalClicksOptions: LineChartWidgetOptions = {
    title: 'Total Clicks',
    gain: -6.1,
    subTitle: 'compared to last month',
    background: '#66BB6A',
    color: '#FFFFFF'
  };

  conversionsData$: Observable<ChartData>;
  conversionsOptions: LineChartWidgetOptions = {
    title: 'Conversions',
    gain: 10.4,
    subTitle: 'compared to last month',
    background: '#009688',
    color: '#FFFFFF'
  };

  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs'; // Needed for Touch functionality of Material Components
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PastComponent } from './past/past.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { ClickOutsideDirective } from './core/click-outside.directive';
import { HeaderComponent } from './core/header/header.component';
import { UserNotificationsComponent } from './core/header/user-notifications/user-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    PastComponent,
    WorkoutComponent,
    ExercisesComponent,
    HeaderComponent,
    ClickOutsideDirective,
    UserNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

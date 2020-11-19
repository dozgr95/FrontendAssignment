import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';
import { StrategyReportComponent } from './strategy-report/strategy-report.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationCenterComponent,
    StrategyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';
import { StrategyReportComponent } from './strategy-report/strategy-report.component';

const routes: Routes = [
  { path: 'app', component: AppComponent},
  { path: 'notifications', component: NotificationCenterComponent},
  { path: 'strategy-report', component: StrategyReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

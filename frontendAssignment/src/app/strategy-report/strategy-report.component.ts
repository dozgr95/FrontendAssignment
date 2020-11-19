import { Component, OnInit } from '@angular/core';
import { loadNotifications, notification } from '../notificationsHelper';


@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
  styleUrls: ['./strategy-report.component.sass']
})
export class StrategyReportComponent implements OnInit {
  notificationsPreview: notification[] = []

  constructor() { }

  ngOnInit(): void {
    if(this.notificationsPreview.length === 0) {
      this.notificationsPreview = loadNotifications();
    }    
  }

  hideNotification(notification: notification) {
    notification.status = 'old'
  }
}

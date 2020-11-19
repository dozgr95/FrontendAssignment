import { Component, OnInit } from '@angular/core';
import { loadNotifications, notification } from '../notificationsHelper';


@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
  styleUrls: ['./strategy-report.component.sass']
})
export class StrategyReportComponent implements OnInit {
  notifications: notification[] = []

  constructor() { }

  ngOnInit(): void {
    this.notifications = loadNotifications();
  }

  hideNotification(notification: notification) {
    notification.status = 'old'
  }
}

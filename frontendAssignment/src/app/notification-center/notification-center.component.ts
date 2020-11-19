import { Component, OnInit } from '@angular/core';
import { loadNotifications, notification } from './notificationsHelper';


@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.sass']
})
export class NotificationCenterComponent implements OnInit {
  title = 'frontendAssignment';
  notifications: notification[] = loadNotifications();
  readItem = '';

  deleteNotification(deleteNotification: notification) {
    const index = this.notifications.findIndex(notification => notification.title === deleteNotification.title)
    this.notifications.splice(index, 1)
    this.readItem = ''
  }

  readNotification(notification: notification) {
    if(this.readItem){
      this.readItem = ''
    }else{
      this.readItem = notification.title
    }
    if (notification.status === "new") {
      notification.status ="old"
    }        
  }

  constructor() { }

  ngOnInit(): void {
  }

}

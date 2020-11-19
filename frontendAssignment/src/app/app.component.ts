import { Component } from '@angular/core';
import { loadNotifications, notification } from './notificationsHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
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
}

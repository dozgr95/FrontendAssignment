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
}

import * as notificationsData from '../assets/notifications.json';

export interface notification{
    date: string
    title: string
    desc: string
    active: boolean
    status: string
}

const dateSort = (a: string,b: string): number => {
    // e.g. Thu, 07 Nov 2019 06:43:32 CET +01:00
    let splitter: string[] = []
    let dateA
    let dateB
    splitter = a.split(' CET +01:00')
    dateA = Date.parse(splitter[0])
    splitter = b.split(' CET +01:00')
    dateB = Date.parse(splitter[0]) 
    return dateB - dateA
}

export const loadNotifications = () => {
    let notifications: notification[] = notificationsData.notifications;
    notifications.sort((a,b) => dateSort(a.date,b.date))
    notifications = notifications.filter(notification => notification.active)
    return notifications
}
  
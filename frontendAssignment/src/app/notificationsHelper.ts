import * as notificationsData from '../assets/notifications.json';

export interface notification{
    date: string
    title: string
    desc: string
    active: boolean
    status: string
}

const parseDate = (timestamp: string) => {
    let splitter: string[] = []
    splitter = timestamp.split(' CET +01:00')
    return Date.parse(splitter[0])
}

export const loadNotifications = () => {
    let notifications: notification[] = notificationsData.notifications;
    notifications.sort((a,b) => parseDate(b.date) - parseDate(a.date))
    notifications = notifications.filter(notification => notification.active)
    notifications.map(notification => {
        let date = new Date(parseDate(notification.date))
        notification.date = date.toLocaleDateString()
    })
    return notifications
}   

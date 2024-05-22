import User from '#models/user'
import env from '#start/env'
import PushNotifications from '@pusher/push-notifications-server'

export default class PusherService {
  beamsClient: PushNotifications

  constructor() {
    this.beamsClient = new PushNotifications({
      instanceId: env.get('PUSHER_INSTANCE_ID'),
      secretKey: env.get('PUSHER_SECRET_KEY'),
    })
  }

  async generateBeamToken(userId: string) {
    return this.beamsClient.generateToken(userId)
  }

  async sendAdminPushNotification(title: string, message: string) {
    const admin = await User.findBy('role', 'admin')
    if (!admin) return

    const payload = { title, body: message }
    this.beamsClient
      .publishToUsers([admin.id], {
        apns: {
          aps: {
            alert: { ...payload },
          },
        },
        fcm: {
          notification: { ...payload },
          priority: 'high',
        },
        web: {
          notification: { ...payload },
        },
      })
      .then((publishResponse) => {
        console.log('Just published:', publishResponse.publishId)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  async sendPushNotification(users: string[], title: string, message: string) {
    const payload = { title, body: message }
    this.beamsClient
      .publishToUsers(users, {
        apns: {
          aps: {
            alert: { ...payload },
          },
        },
        fcm: {
          notification: { ...payload },
          priority: 'high',
        },
        web: {
          notification: { ...payload },
        },
      })
      .then((publishResponse) => {
        console.log('Just published:', publishResponse.publishId)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}

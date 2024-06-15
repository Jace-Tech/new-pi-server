import { AppSettingKeys } from '#enums/app_settings'
import AppSetting from '#models/app_setting'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const exists = await db.from(AppSetting.table).select('*')
    console.log({ exists })

    if (exists.length) return
    await AppSetting.createMany([
      {
        name: AppSettingKeys.FAN_TO_PI,
        value: 100,
      },
      {
        name: AppSettingKeys.STAKE_PRICE,
        value: 3.142,
      },
    ])
  }
}

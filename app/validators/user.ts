import { UserCareers, UserSocialHandles } from '#enums/user'
import vine from '@vinejs/vine'

export const userUpdateDetailValidator = vine.compile(
  vine.object({
    musicName: vine.string().minLength(3).maxLength(50).trim(),
    musicCareer: vine.enum(Object.values(UserCareers)),
    genreId: vine.string().uuid(),
    country: vine.string().minLength(3).maxLength(50),
    bio: vine.string().trim().minLength(10).maxLength(500),
    gender: vine.enum(['male', 'female']),
    socialHandles: vine.array(
      vine.object({
        name: vine.enum(Object.values(UserSocialHandles)),
        link: vine.string().url(),
      })
    ),
  })
)

export const userStatusValidator = vine.compile(
  vine.object({
    status: vine.boolean(),
  })
)

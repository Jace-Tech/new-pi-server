import { UserCareers, UserSocialHandles } from '#enums/user'
import vine from '@vinejs/vine'

export const updateUserDetailValidator = vine.compile(
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

export const uploadValidator = vine.compile(
  vine.object({
    profileImage: vine.file({
      extnames: ['jpg', 'png', 'jpeg'],
      size: '5mb',
    }),
    coverImage: vine.file({
      extnames: ['jpg', 'png', 'jpeg'],
      size: '5mb',
    }),
  })
)

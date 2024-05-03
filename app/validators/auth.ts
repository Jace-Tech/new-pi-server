import vine from '@vinejs/vine'

export const authorizeUserValidator = vine.compile(
  vine.object({
    accessToken: vine.string().trim(),
    user: vine.object({
      uid: vine.string(),
      username: vine.string(),
    }),
  })
)

export const authorizeAdminValidator = vine.compile(
  vine.object({
    email: vine.string(),
    password: vine.string(),
  })
)

export const registerAdminValidator = vine.compile(
  vine.object({
    username: vine.string(),
    email: vine.string(),
    password: vine.string(),
  })
)

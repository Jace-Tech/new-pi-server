import vine from '@vinejs/vine'

export const socialValidator = vine.compile(
  vine.object({
    socials: vine.array(
      vine.object({
        name: vine.string(),
        link: vine.string().url(),
      })
    ),
    params: vine.object({
      id: vine.string().uuid(),
    }),
  })
)

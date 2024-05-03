import vine from '@vinejs/vine'

export const basicIdParamValidator = vine.compile(
  vine.object({
    id: vine.string().uuid(),
  })
)

import vine from '@vinejs/vine'

export const createContentValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3),
    type: vine.enum(['beat', 'music-video', 'song']),
    price: vine.number().optional(),
    country: vine.string().optional(),
    transactionId: vine.string().uuid(),
    genreId: vine.string().uuid(),
    coverImage: vine
      .file({
        extnames: ['png', 'jpg', 'jpeg'],
        size: '5mb',
      })
      .optional(),
    content: vine
      .file({
        extnames: ['mp3', 'mp4', 'gif', 'jpg', 'jpeg', 'png'],
      })
      .optional(),
    displayCut: vine
      .file({
        extnames: ['mp3', 'mp4', 'mov', 'gif', 'jpg', 'jpeg', 'png'],
      })
      .optional(),
    features: vine.string().optional(),
  })
)

export const updateContentValidator = vine.compile(
  vine.object({
    price: vine.number(),
    params: vine.object({
      id: vine.string().uuid(),
    }),
  })
)

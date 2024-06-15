import Comment from '#models/comment'
import Content from '#models/content'
import Like from '#models/like'
import User from '#models/user'

export type PersonalizeContentResult = Partial<Content | Content[]> & {
  isLiked: boolean
  hasComment: boolean
}
export default class ContentBuilder {
  static async personalizeContent(user: User, contents: Content | Content[]) {
    if (!Array.isArray(contents)) {
      const like = await Like.query()
        .where('user_id', user.id)
        .andWhere('content_id', contents.id)
        .count('*')

      const comment = await Comment.query()
        .where('user_id', user.id)
        .andWhere('content_id', contents.id)
        .count('*')

      const result: PersonalizeContentResult = {
        ...contents.toObject(),
        isLiked: Boolean(like),
        hasComment: Boolean(comment),
      }
      return result
    }

    const results: Partial<Content | Content[]> & { isLiked: boolean; hasComment: boolean }[] = []
    for (const content of contents) {
      const like = await Like.query()
        .where('user_id', user.id)
        .andWhere('content_id', content.id)
        .count('*')

      const comment = await Comment.query()
        .where('user_id', user.id)
        .andWhere('content_id', content.id)
        .count('*')

      results.push({ ...content.toObject(), isLiked: Boolean(like), hasComment: Boolean(comment) })
    }
    return results
  }
}

import { mefiaFileTransformer } from '~~/server/transformers/mediaFiles'
import { userTransformer } from '~~/server/transformers/user'
import human from 'human-time';

/**
 * Хелпер преобразования поста к нужному виду. Убираем лишние поля
 * @param {*} post 
 * @returns 
 */
export const postTransformer = (post) => {
    return {
        id: post.id,
        text: post.text,
        mediaFiles: !!post.mediaFiles ? post.mediaFiles.map(mefiaFileTransformer) : [],
        author: !!post.author ? userTransformer(post.author) : null,
        replies: !!post.replies ? post.replies.map(postTransformer) : [],
        replyTo: !!post.replyTo ? postTransformer(post.replyTo) : null,
        repliesCount: !!post.replies ? post.replies.length : 0,
        postedAt: human(post.updatedAt),
    }
}
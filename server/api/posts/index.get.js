import { getPosts } from '~~/server/db/post';
import { postTransformer } from '~~/server/transformers/post';

export default defineEventHandler(async (event) => {

    const posts = await getPosts({
        include: {
            author: true,
            mediaFiles: true,
            replies: {
                include: {
                    author: true
                }
            },
            replyTo: {
                include: {
                    author: true
                }
            }
        },
        orderBy: [
            {
                createdAt: 'desc'
            }
        ]
    });

    return {
        posts: posts.map(postTransformer)
    }
});
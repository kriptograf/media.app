/**
 * Хелпер преобразования поста к нужному виду. Убираем лишние поля
 * @param {*} post 
 * @returns 
 */
export const postTransformer = (post) => {
    return {
        id: post.id,
        text: post.text,
        published: post.updatedAt,
        author: post.author
    }
}
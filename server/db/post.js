import prisma from '~~/server/db/client';

/**
 * Метод сохранения поста в бд
 * @param {*} postData 
 * @returns 
 */
export const createPost = (postData) => {
    return prisma.post.create({
        data: postData
    });
}

export const getPosts = (params = {}) => {
    return prisma.post.findMany({
        ...params
    });
}
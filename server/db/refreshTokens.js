import prisma from '~~/server/db/client';

/**
 * Сохраняем токен в бд
 * @param {*} refreshToken 
 * @returns 
 */
export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.upsert({
        where: {
            userId: refreshToken.userId,
        },
        update: {
            token: refreshToken.token,
        },
        create: {
            token: refreshToken.token,
            userId: refreshToken.userId,
        }
    });
}

/**
 * Получаем запись токена из базы данных по значению токена
 * @param {*} token 
 * @returns 
 */
export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token: token,
        }
    });
}
import prisma from '~~/server/db/client';

/**
 * Сохраняем пользователя в бд
 * @param {*} userData 
 * @returns 
 */
export const createUser = (userData) => {
    return prisma.user.create({
        data: userData
    });
};

/**
 * Получаем пользователя по email
 * @param {*} email 
 * @returns 
 */
export const getUserByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    });
};

/**
 * Получаем пользователя по id
 * @param {*} id 
 * @returns 
 */
export const getUserById = (id) => {
    return prisma.user.findUnique({
        where: {
            id: id
        }
    });
}
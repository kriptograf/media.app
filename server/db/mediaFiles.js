import prisma from '~~/server/db/client';

/**
 * Метод сохранения медиафайла в бд
 * @param {*} mediaFile 
 * @returns 
 */
export const createMediaFile = (mediaFile) => {
    return prisma.mediaFile.create({
        data: mediaFile
    });
}
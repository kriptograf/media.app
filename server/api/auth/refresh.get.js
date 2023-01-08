import { sendError, createError } from "h3";
import { getRefreshTokenByToken } from "~~/server/db/refreshTokens";
import { decodeRefreshToken, generateTokens } from "~~/server/utils/jwt";
import { getUserById } from "~~/server/db/users";

/**
 * Серверный обработчик обновления токена
 */
export default defineEventHandler( async (event) => {
    // -- useCookie не работает, по этому используем getCookie для чтения куки
    const refreshToken = getCookie(event, 'refresh_token');

    // -- Если не удалось получить токен из куки, вернем сообщение об ошибке
    if(!refreshToken) {
        return sendError(event, createError({ statusCode: 401, statusMessage: 'Refresh token is invalid' }));
    }

    // -- Получаем значение токена из базы данных по токену
    const token = getRefreshTokenByToken(refreshToken);

    // -- Если токен не найден, вернем сообщение об ошибке
    if(!token) {
        return sendError(event, createError({ statusCode: 401, statusMessage: 'Refresh token is invalid' }));
    }

    // -- Верефицируем токен и расшифровываем его
    const decodedToken = decodeRefreshToken(refreshToken);

    try {
        // -- Получаем пользователя из бд
        const user = await getUserById(decodedToken.userId);

        // -- Генерируем новый accessToken
        const { accessToken } = generateTokens(user);

        return {
            access_token: accessToken
        }
    } catch (error) {
        return sendError(event, createError({ statusCode: 500, statusMessage: 'Something went wrong' }));
    }
});
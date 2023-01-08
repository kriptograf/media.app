import { getUserByEmail } from "~~/server/db/users";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import bcrypt from 'bcrypt';
import { userTransformer } from '~~/server/transformers/user';
import { createRefreshToken } from '~~/server/db/refreshTokens';

/**
 * Серверный обработчик post запроса авторизации
 */
export default defineEventHandler(async(event) => {
    // -- Считываем тело запроса
    const body = await readBody(event);

    // -- Распакуем в переменные
    const { email, password } = body;

    // -- Проверим, если какое-то из полей не заполнено, вернем ошибку
    if (!email || !password) {
        return sendError(event, createError({ statusCode: 422, statusMessage: 'Invalid params' }));
    }

    // -- Получаем пользователя по email
    const user = await getUserByEmail(email);

    // -- Если пользователь не найден, возвращаем ошибку
    if(!user) {
        return sendError(event, createError({ statusCode: 422, statusMessage: 'Email or password is invalid' }));
    }

    // -- Сравниваем переданный пароль с хранящимся в бд
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    // -- Если пароли не совпадают, вернем сообщение об ошибке
    if(!doesPasswordMatch) {
        return sendError(event, createError({ statusCode: 422, statusMessage: 'Email or password is invalid' }));
    }

    // -- Генерируем токены
    const { accessToken, refreshToken } = generateTokens(user);

    // -- Сохраняем refreshToken в бд
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    });

    // -- Добавляем refreshToken в куки
    sendRefreshToken(event, refreshToken);

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
});
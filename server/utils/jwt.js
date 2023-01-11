import jwt from 'jsonwebtoken';
import { setCookie } from 'h3';

// -- Генерируем accessToken
const generateAccessToken = (user, config) => {
    return jwt.sign({ userId: user.id}, config.jwtAccessSecret, {
        expiresIn: '10m'
    });
};
// -- Генерируем refreshToken
const generateRefreshToken = (user, config) => {
    return jwt.sign({ userId: user.id}, config.jwtRefreshSecret, {
        expiresIn: '4h'
    });
};

/**
 * Возвращаем сгенерированные токены в контроллер авторизации
 * @param {*} user 
 * @returns 
 */
export const generateTokens = (user) => {
    const config = useRuntimeConfig();
    const accessToken = generateAccessToken(user, config);
    const refreshToken = generateRefreshToken(user, config);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
};

/**
 * Сохраняем токен в куки
 * @param {*} event 
 * @param {*} token 
 */
export const sendRefreshToken = (event, token) => {
    setCookie(event, 'refresh_token', token, {
        httpOnly: true,
        sameSite: true
    });
};

/**
 * Верификация refreshToken
 * @param {*} token 
 * @returns 
 */
export const decodeRefreshToken = (token) => {
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtRefreshSecret);
    } catch (error) {
        return null;
    }
};

/**
 * Верификация accessToken
 * @param {*} token 
 * @returns 
 */
export const decodeAccessToken = (token) => {
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtAccessSecret);
    } catch (error) {
        return null;
    }
};
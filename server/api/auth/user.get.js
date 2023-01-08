import { userTransformer } from '~~/server/transformers/user'

/**
 * Api controller - получаем данные текущего пользователя
 */
export default defineEventHandler( async (event) => {
    return { user: userTransformer(event.context.auth?.user) };
});
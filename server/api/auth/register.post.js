import { createError, defineEventHandler, readBody, sendError } from "h3";
import { createUser } from "~~/server/db/users";
import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { userTransformer } from '~~/server/transformers/user';

/**
 * Серверный обработчик post запроса регистрации
 */
export default defineEventHandler(async (event) => {
  // -- Считываем тело запроса
  const body = await readBody(event);

  // -- Распакуем в переменные
  const { username, email, password, repeatPassword, name } = body;

  // -- Проверим, если какое-то из полей не заполнено, вернем ошибку
  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event, createError({ statusCode: 422, statusMessage: 'Invalid params' }));
  }

  // -- Проверим, что пароли совпадают
  if (password !== repeatPassword) {
    return sendError(event, createError({ statusCode: 422, statusMessage: 'Passwords do not match' }));
  }

  // -- Криптуем пароль
  const encryptedPassword = await bcrypt.hash(password, 10);

  // -- Создадим объект для передачи в метод модели createUser
  const userData = {
    username: username,
    email: email,
    password: encryptedPassword,
    name: name,
    profileImage: 'https://picsum.photos/200/200'
  };

  // -- Пробуем создать пользователя. Если неудача, вернем сообщение об ошибке
  try {
    const user = await createUser(userData);

    return {
      body: userTransformer(user)
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // -- Если получаем ошибку unique constraint, вернем сообщение об ошибке
      if (e.code === 'P2002') {
        return sendError(event, createError({ statusCode: 422, statusMessage: 'There is a unique constraint violation, a new user cannot be created with this email' }));
      }
    }

    throw e
  }
});

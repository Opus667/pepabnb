import 'dotenv/config';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

export const JWTVerify = req => {
  const { token } = req.cookies;
  if (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
        if (error) {
          console.error('Deu ruim com o JWT', error);
          reject(error);
        }

        resolve(userInfo);
      });
    });
  } else {
    return null;
  }
};

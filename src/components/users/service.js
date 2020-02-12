import { DB_SALT } from '@app/config/env';
import { genRandomString, getHmac } from '@app/utils/hash';

import UserModel from './model';

export const isEmailTaken = async email => {
  const user = await UserModel.findOne({ email });

  return user !== null;
};

export const createUser = ({ email, password, name }) => {
  const salt = genRandomString(32);

  return UserModel.create({
    email,
    name,
    passwordHash: getHmac(password, salt + DB_SALT),
    passwordSalt: salt,
  });
};

export const getUserByEmail = email => UserModel.findOne({ email });

export const isPasswordSame = (pass, encryptedPass, salt) => {
  const passwordHash = getHmac(pass, salt + DB_SALT);

  return passwordHash === encryptedPass;
};

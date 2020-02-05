import { genRandomString, getHmac } from "../../utils/hash";
import UserModel from './model';
import {DB_SALT} from "../../config/env";

export const isEmailTaken = async email =>
  (await UserModel.findOne({ email })) !== null;

export const createUser = ({email, password, name}) => {
  const salt = genRandomString(32);

  return UserModel.create({
    email,
    name,
    passwordHash: getHmac(password, salt + DB_SALT),
    passwordSalt: salt,
  });
};

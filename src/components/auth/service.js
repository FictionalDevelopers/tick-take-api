import { sign } from 'jsonwebtoken';

import { TOKEN_SECRET } from "../../config/env";

export const createToken = (data, expireTime) =>
  sign(data, TOKEN_SECRET, {
    expiresIn: expireTime,
  });

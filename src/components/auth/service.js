import { sign, verify } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../../config/env';

export const createAccessToken = data => sign(data, ACCESS_TOKEN_SECRET);
export const verifyAccessToken = token => verify(token, ACCESS_TOKEN_SECRET);

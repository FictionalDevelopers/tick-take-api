import { sign } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../../config/env';

export const createAccessToken = data => sign(data, ACCESS_TOKEN_SECRET);

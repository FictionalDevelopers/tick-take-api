import { createHmac, randomBytes } from 'crypto';

export const genRandomString = length => randomBytes(length).toString('hex');

export const getHmac = (string, salt) => {
  const hmac = createHmac('sha512', salt);
  hmac.update(string);

  return hmac.digest('hex');
};

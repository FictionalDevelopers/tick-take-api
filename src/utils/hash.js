import { createHmac, randomBytes } from 'crypto';

export const genRandomString = length => randomBytes(length).toString('hex');

export const getHmac = (password, salt) => {
  const hash = createHmac('sha512', salt);
  hash.update(password);

  return hash.digest('hex');
};

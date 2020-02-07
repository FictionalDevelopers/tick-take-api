import dotEnvExtended from 'dotenv-extended';

export const { PORT, DB_NAME, DB_URL, DB_SALT, TOKEN_SECRET } = dotEnvExtended.load({
  errorOnMissing: true,
});

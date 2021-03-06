import dotEnvExtended from 'dotenv-extended';

export const {
  PORT,
  DB_NAME,
  DB_URL,
  DB_SALT,
  ACCESS_TOKEN_SECRET,
  CLIENT_ORIGIN,
} = dotEnvExtended.load({
  errorOnMissing: true,
  includeProcessEnv: true,
});

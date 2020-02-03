import dotEnvExtended from 'dotenv-extended';

export const { PORT } = dotEnvExtended.load({
  errorOnMissing: true,
});

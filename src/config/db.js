import mongoose from 'mongoose';

import { DB_URL, DB_NAME } from './env';

export default () =>
  mongoose
    .connect(DB_URL, {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: 'majority',
    })
    .then(() => console.log('Mongo connected')) // eslint-disable-line no-console
    .catch(err => console.log(err)); // eslint-disable-line no-console

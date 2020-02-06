import express, { json } from 'express';
import { PORT } from './config/env';
import routes from './routes';
import createDbConnection from './db';

const app = express();

app.use(json());
app.use('/api', routes);

(async () => {
  try {
    await createDbConnection();

    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log('Server listening on:', PORT));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong');
  }
})();

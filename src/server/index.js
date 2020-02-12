import express, { json } from 'express';
import helmet from 'helmet';

import createDbConnection from '@app/config/db';
import { PORT } from '@app/config/env';

import routes from './routes';

const app = express();

app.use(helmet());
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

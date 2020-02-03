import express, { json } from 'express';

import { PORT } from './config/env';

import routes from './routes';

const app = express();

app.use(json());

app.use('/api', routes);

app.listen(PORT, () => console.log('Server listening on:', PORT));

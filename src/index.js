import express, { json } from 'express';

import { PORT } from './config/env';

import routes from './routes';
import createDbConnection from './db';
console.log('SUKA')
const app = express();

createDbConnection();

app.use(json());

app.use('/api', routes);

app.listen(PORT, () => console.log('Server listening on:', PORT));

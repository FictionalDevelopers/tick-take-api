import mongoose from 'mongoose';

const { DB_URL, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const useAuth = DB_PASSWORD && DB_USER;

export default () =>
    mongoose
        .connect(DB_URL, {
            ...(useAuth && {
                auth: {
                    password: DB_PASSWORD,
                    user: DB_USER,
                },
            }),
            dbName: DB_NAME,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority',
        })
        .then(() => console.log('Mongo connected')) // eslint-disable-line no-console
        .catch(err => console.log(err)); // eslint-disable-line no-console

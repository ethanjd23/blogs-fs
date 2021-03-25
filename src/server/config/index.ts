import * as dotenv from 'dotenv';

const envFound = dotenv.config()

if (!envFound) {
    throw new Error("Cannot find .env file");
}

export default {
    mysql: {
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    },
    port: parseInt(process.env.PORT, 10),
    auth: {
        secret: process.env.AUTH_SECRET
    }
}
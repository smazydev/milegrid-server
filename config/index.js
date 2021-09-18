require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    mongo: {
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASS: process.env.MONGO_PW,
    }
}
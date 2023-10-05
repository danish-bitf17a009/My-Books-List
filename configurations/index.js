require('dotenv').config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT;
const HOST = process.env.HOST;

module.exports = { MONGODB_CONNECTION_STRING, PORT, HOST}
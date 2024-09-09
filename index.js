// index.js
const express = require('express');
const app = express();
const port = 3000;
const Logger = require('./logger'); // Ensure the path matches the file name and location
const logger = new Logger('debug.log');

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
    logger.log('Server started successfully'); // Logging a message with context
    logger.warn('Warning is comming'); // Logging a message with context
    logger.error('Error to connection'); // Logging a message with context

});

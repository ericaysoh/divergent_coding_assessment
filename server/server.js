const express = require('express');
// const path = require('path');

const app = express();
const PORT = 3333;

const shelfRouter = require('./routes/shelfRouter');
const warehouseRouter = require('./routes/warehouseRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.use('/addshelf', shelfRouter);
app.use('/warehouse', warehouseRouter);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
  // return next(errorObj);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

module.exports = app;
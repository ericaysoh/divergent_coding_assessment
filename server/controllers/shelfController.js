const db = require('../models/warehouseModel');
const shelfController = {};

shelfController.getZoneInfo = (req, res, next) => {
  const queryString = 'SELECT * FROM "Zone";';
  
  db.query(queryString)
    .then((data) => {
      res.locals.data = { zone: data.rows };
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in shelfController.getWarehouseInfo',
        status: 400,
        message: { err: 'An error occurred' }
      });
    });
};

shelfController.createShelf = (req, res, next) => {
  console.log('in createShelf')
  const { shelfName } = req.body;
  const queryString = {
    text: 'INSERT INTO "Shelf" (shelf_name) VALUES ($1) RETURNING *;',
    values: [shelfName]
  };

  db.query(queryString)
    .then((data) => {
      res.locals.data = { shelf: data.rows };
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in shelfController.createShelf',
        status: 400,
        message: { err: 'An error occurred' }
      });
    });
};

module.exports = shelfController;
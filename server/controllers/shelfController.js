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
  const { zone, shelves } = req.body;

  // iterate through shelves array and retrieve shelf names
  //TODO: revert data model back to original - no Zone table, zone_id to zone and no references

  const queryString = {
    text: 'INSERT INTO "Shelf" (zone, shelf_name) VALUES ($1, $2) RETURNING *;',
    values: [zone, shelves]
  };

//   const query = {
//     text: 'SELECT $1::text as first_name, $2::text as last_name',
//     values: ['Brian', 'Carlson'],
//     rowMode: 'array',
//   }

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
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
  const { zone, shelfNames, warehouseId } = req.body;

 
  // console.log('zone', zone, 'shelves', shelfNames, 'warehouseId', warehouse) // -> zone 5 shelves [ {}, { 's-0': 'hgjbkjbj' } ]

  let shelfId;
  let shelf;
  const zondId = Number(zone);

  
  
  for (let key in shelfNames) {
    
    shelfId = key + 'z' + zone;
    shelf = shelfNames[key];
    
    const queryString = {
      text: 'INSERT INTO "Shelf" (shelf_id, shelf_name, zone_id, warehouse_id) VALUES ($1, $2, $3, $4) RETURNING *;',
      values: [shelfId, shelf, zondId, warehouseId]
    };

    db.query(queryString)
    .then((data) => {
      res.locals.data = { shelf: data.rows };
      return next();
    })
    .catch((err) => {
      console.log('err', err);
      next({
        log: 'Error occurred in shelfController.createShelf',
        status: 400,
        message: { err: 'An error occurred' }
      });
    });

  }
//   const query = {
//     text: 'SELECT $1::text as first_name, $2::text as last_name',
//     values: ['Brian', 'Carlson'],
//     rowMode: 'array',
//   }

  
};

module.exports = shelfController;
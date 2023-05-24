const db = require('../models/warehouseModel');
const warehouseController = {};

warehouseController.getWarehouseInfo = (req, res, next) => {
  const queryString = 'SELECT * FROM "Warehouse";';
  
  db.query(queryString)
    .then((data) => {
      res.locals.data = { warehouse: data.rows };
      console.log('res.locals data here:', res.locals.data);
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in warehouseController.getWarehouseInfo',
        status: 400,
        message: { err: 'An error occurred' }
      });
    });
};

warehouseController.createWarehouse = (req, res, next) => {
  console.log('in createWarehouse')
  const { warehouseName } = req.body;

  const queryString = {
    text: 'INSERT INTO "Warehouse" (warehouse_name) VALUES ($1) RETURNING *;',
    values: [warehouseName]
  };

  db.query(queryString)
    .then((data) => {
      res.locals.data = { warehouse: data.rows };
      console.log('res.locals data here222:', res.locals.data); // -> { warehouse: [ { warehouse_id: 1, warehouse_name: 'abc' }]}
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in warehouseController.createWarehouse',
        status: 400,
        message: { err: 'An error occurred' }
      });
    });
};

module.exports = warehouseController;
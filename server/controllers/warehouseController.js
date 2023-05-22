const db = require('../models/warehouseModel');
const warehouseController = {};

warehouseController.getWarehouseInfo = (req, res, next) => {
  const queryString = 'SELECT * FROM Warehouse;';
  
  db.query(queryString)
    .then((data) => {
      res.locals.data = { warehouse: data.rows };
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
  const { warehouseName } = req.body;
  const queryString = {
    text: 'INSERT INTO Warehouse (warehouseName) VALUES ($1) RETURNING *;',
    values: [warehouseName]
  };

  db.query(queryString)
    .then((data) => {
      res.locals.data = { warehouse: data.rows };
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
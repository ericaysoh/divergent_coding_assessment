const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');

router.get(
  '/:warehouse_id',
  warehouseController.getWarehouseInfo,
  (req, res) => {
    return res.status(200).json(res.locals.warehouseData);
  }
);

router.post(
  '/createWarehouse',
  warehouseController.createWarehouse,
  (req, res) => {
    return res.status(200).json(res.locals.warehouseData);
  }
);

module.exports = router;

const express = require('express');
const router = express.Router();
const shelfController = require('../controllers/shelfController');

router.get(
  '/:warehouse_id/zone_id',
  shelfController.getZoneInfo,
  (req, res) => {
    return res.status(200).json(res.locals.data);
  }
);

router.post('/createShelf', shelfController.createShelf, (req, res) => {
  return res.status(200).json(res.locals.data);
});

module.exports = router;

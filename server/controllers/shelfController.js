const db = require("../models/warehouseModel");
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
        log: "Error occurred in shelfController.getWarehouseInfo",
        status: 400,
        message: { err: "An error occurred" },
      });
    });
};

shelfController.createShelf = (req, res, next) => {
  const { zone, shelfNames, warehouseId } = req.body;

  let shelfId;
  let shelf;
  const zondId = Number(zone);

  const shelfArr = [];

  for (let key in shelfNames) {
    shelfId = key + "z" + zone;
    shelf = shelfNames[key];

    shelfArr.push([shelfId, shelf, zondId, warehouseId]);
  }

  const queryString = ` 
  INSERT INTO "Shelf" (shelf_id, shelf_name, zone_id, warehouse_id)
  SELECT shelfId_value, shelfName_value, zoneId_value, warehouseId_value
  FROM unnest($1::text[], $2::text[], $3::integer[], $4::integer[]) AS t (shelfId_value, shelfName_value, zoneId_value, warehouseId_value);
`;

  const values = [
    shelfArr.map((v) => v[0]), // shelf_id values
    shelfArr.map((v) => v[1]), // shelf_name values
    shelfArr.map((v) => v[2]), // zone_id values
    shelfArr.map((v) => v[3]), // warehouse_id values
  ];

  db.query(queryString, values)
    .then((data) => {
      res.locals.data = { shelf: data.rows };
      return next();
    })
    .catch((err) => {
      console.log("err", err);
      next({
        log: "Error occurred in shelfController.createShelf",
        status: 400,
        message: { err: "An error occurred" },
      });
    });
};

module.exports = shelfController;

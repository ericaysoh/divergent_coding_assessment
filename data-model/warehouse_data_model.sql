-- Warehouse table
CREATE TABLE warehouse (
  warehouse_id SERIAL PRIMARY KEY,
  warehouse_name VARCHAR(255)
);

-- Shelf table
CREATE TABLE shelf (
  shelf_id SERIAL PRIMARY KEY,
  shelf_name VARCHAR(255),
  zone INT,
  warehouse_id INT REFERENCES warehouse(warehouse_id)
);
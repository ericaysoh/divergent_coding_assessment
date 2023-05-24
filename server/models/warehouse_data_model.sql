-- Warehouse table
CREATE TABLE Warehouse (
  warehouse_id SERIAL PRIMARY KEY,
  warehouse_name VARCHAR(255)
);

-- Shelf table
CREATE TABLE Shelf (
  shelf_id SERIAL PRIMARY KEY,
  shelf_name VARCHAR(255),
  zone_id INT REFERENCES zone(zone_id),
  warehouse_id INT REFERENCES warehouse(warehouse_id)
);

-- Zone table
CREATE TABLE Zone (
  zone_id INT PRIMARY KEY,
  warehouse_id INT REFERENCES warehouse(warehouse_id)
)
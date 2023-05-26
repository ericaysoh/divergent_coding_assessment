import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Zone from "./Zone.js";
import WarehouseLayout from "./WarehouseLayout.js";

const AddShelf = () => {
  const [shelfNames, setShelfNames] = useState({});
  const [shelves, setNewShelf] = useState([]);
  const [zone, setZone] = useState(0);
  const location = useLocation();

  const { warehouse_name: warehouseName, warehouse_id: warehouseId } =
    location.state.warehouseData;

  const ShelfComponent = (props) => {
    return (
      <div class="shelf">
        <form>
          <label>
            <input
              type="text"
              placeholder="new shelf name here"
              value={shelfNames[props.newProp]}
              name={props.newProp}
              onChange={handleChange}
              autoFocus={true}
            />
          </label>
        </form>
        <br></br>
      </div>
    );
  };

  const handleChange = (e) => {
    setShelfNames((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addShelf = () => {
    if (shelves.length <= 9) {
      setNewShelf([...shelves, shelfNames]);
    }
  };

  const submitShelf = () => {
    fetch("/addshelf/createShelf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ zone, shelfNames, warehouseId: warehouseId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="dashboard">
      <h1 className="whn">Warehouse name: {warehouseName}</h1>

      <Zone zoneNum={zone} zoneStateFunc={setZone} />
      <div>Number of shelves remaining: {10 - shelves.length}</div>

      <div className="shelves">
        <button onClick={addShelf}>+ Add a new shelf</button>
        {shelves.map((item, i) => (
          <ShelfComponent key={`s-${i}`} newProp={`s${i}`} />
        ))}
      </div>

      <button onClick={submitShelf}>Submit</button>

      <div className="warehouseLayout">Warehouse Layout</div>
      <WarehouseLayout zoneNum={zone} shelvesArr={shelves} />
    </div>
  );
};

export default AddShelf;

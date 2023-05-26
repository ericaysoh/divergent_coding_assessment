import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Zone from './Zone.js';
import WarehouseLayout from './WarehouseLayout.js';

const AddShelf = () => {

  // create states for zones and shelves
  const [shelfNames, setShelfNames] = useState({});
  const [shelves, setNewShelf] = useState([]);
  const [zone, setZone] = useState(0);
  const location = useLocation();
  // const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  //   console.log('inputRef', inputRef)
  // }

  const { warehouse_name: warehouseName, warehouse_id: warehouseId } = location.state.warehouseData;

  const ShelfComponent = (props) => {
    return (
      <div class="shelf">
        <form>
          <label>
            <input 
              type='text' 
              placeholder='new shelf name here'
              value={shelfNames[props.newProp]}
              name={props.newProp}
              onChange={handleChange}
              autoFocus={true}
              // ref={inputRef}
              // onClick={handleClick}
            />
          </label>
        </form>
        <br></br>
      </div>
    )
  };

  const handleChange = (e) => {
    setShelfNames((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
    }));
  };

  const addShelf = () => {
    if (shelves.length <= 9) {
      setNewShelf([...shelves, shelfNames])
      // setNewShelf(shelves.concat(<ShelfComponent key={`a-${shelves.length}`}/>));
    }
  };

  // useEffect(() => {
  //   console.log('shelves state', shelves, 'shelf name', shelfNames);
  // }, [shelves, shelfNames]
  // );

  // const submitShelf = () => {
  //   setNewShelf();
  // };

  const submitShelf = () => {
    fetch ('/addshelf/createShelf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zone, shelfNames, warehouseId: warehouseId })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  };

  // define function to fetch warehouse data and pass down to warehouselayout as a prop; call function there... automatic re-render?



  return (
    <div className='dashboard'>
      <h1 className='whn'>Warehouse name: { warehouseName }</h1> 

      <Zone zoneNum={zone} zoneStateFunc={setZone}/>
      <div>Number of shelves remaining: {10 - shelves.length}</div>
      {/* <ShelfComponent key ={shelves.length} /> */}

      <div className='shelves'>

        <button onClick={addShelf}>+ Add a new shelf</button>
          {shelves.map((item, i) => ( <ShelfComponent key={`s-${i}`} newProp={`s${i}`}/> ))}
          {/* {shelves} */}
      </div>
      
      <button onClick={submitShelf}>Submit</button>
   
      <div className='warehouseLayout'>
        Warehouse Layout
      </div>
      <WarehouseLayout zoneNum={zone} shelvesArr={shelves}/>
    </div>
  );
}

export default AddShelf;
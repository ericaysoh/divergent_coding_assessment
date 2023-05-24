import React, { useState, useRef } from 'react';
import Zone from './Zone.js';
import { useLocation } from 'react-router-dom';

function AddShelf() {

  // create states for zones and shelves
  const [shelfName, setShelfName] = useState({});
  const [shelves, setNewShelf] = useState([]);
  const [zone, setZone] = useState(0);
  const location = useLocation();
  // const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  //   console.log('inputRef', inputRef)
  // }

  const ShelfComponent = (props) => {
    return (
      <div className="shelf">
        {/* add shelf button, which creates another shelf name form */}
        <form>
          <label>
            <input 
              type='text' 
              placeholder='new shelf name here'
              value={shelfName[props.newProp]}
              name={props.newProp}
              onChange={handleChange}
              autoFocus='true'
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
    setShelfName((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
    }));
    console.log('state here', shelfName, shelfName[e.target.name], e.target.name, 'value', e.target.value);
  };

  const addShelf = () => {
    if (shelves.length <= 9) {
      setNewShelf([...shelves, 'shelf name here'])
      // setNewShelf(shelves.concat(<ShelfComponent key={`a-${shelves.length}`}/>));
    }
  };


  return (
    <div>
      <div>Warehouse name: { location.state.warehouseData }</div> 

      <Zone zoneNum={zone} zoneStateFunc={setZone}/>
      <div>Number of shelves remaining: {10 - shelves.length}</div>
      {/* <ShelfComponent key ={shelves.length} /> */}
      <button onClick={addShelf}>+ Add a new shelf</button>
        <button >Submit</button>
        {shelves.map((item, i) => ( <ShelfComponent key={`s-${i}`} newProp={`s-${i}`}/> ))}
        {/* {shelves} */}

      <div className='warehouseLayout'>
        layout of warehouse will go here
      </div>
    </div>
  );
}

export default AddShelf;
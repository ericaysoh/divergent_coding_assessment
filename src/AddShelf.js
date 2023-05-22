import { useState } from 'react';
import Zone from './Zone.js';


function AddShelf() {

  // create states for zones and shelves
  const [shelfName, setShelfName] = useState();

  return (
    <div>
      <div>Warehouse name: </div> 

      <Zone/>
      
      <div className="AddShelf">
        {/* zone 1 - 12 dropdown */}
        {/* shelf name form */}
        {/* add shelf button, which creates another shelf name form */}
        <form>
          <label>
            <input 
              type='text' 
              placeholder='new shelf name here'
              value={shelfName}
              onChange={(e) => setShelfName(e.target.value)}
            />
          </label>
        </form>
        <button>+ Add another shelf</button>
        <br></br>
        <button>Create new shelf</button>
      </div>

      <div className='warehouseLayout'>
        layout of warehouse will go here
      </div>
    </div>
  );
}

export default AddShelf;
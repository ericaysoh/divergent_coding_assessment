import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');
  let data = {}; // edit later, use const

  const onClickHandler = () => {
    if (warehouseName) { // and if warehouse name doesn't already exist in database... better to put it in controller query??
      fetch ('/warehouse/createWarehouse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ warehouseName: warehouseName })
      })
      .then(response => { data = response; console.log('data here:', data) }) // will contain warehouseData.. want to pass this data (warehouse id and name) to addshelf page when navigating
      .catch(error => console.log(error));
    }

    navigate('/addshelf', { state: { warehouseData: warehouseName } });
  };

  return (
    <div className='Home'>
      <form>
        <label>
          <input 
            type='text' 
            placeholder='new warehouse name here'
            value={warehouseName}
            onChange={(e) => setWarehouseName(e.target.value)}
          />
        </label>
      </form>
      <button onClick={onClickHandler}>Create new warehouse</button>
    </div>
  );
}

export default Home;
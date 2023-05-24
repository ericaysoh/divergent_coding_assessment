import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');
  let warehouse_data = {}; // edit later, use const

  const onClickHandler = () => {
    if (warehouseName !== '') { // and if warehouse name doesn't already exist in database... better to put it in controller query??
      fetch ('/warehouse/createWarehouse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ warehouseName: warehouseName })
      })
      .then(res => res.json())
      .then(data => { warehouse_data = data; console.log('data here:', data.warehouse) }) // -> {warehouse_id: 7, warehouse_name: 'eee'}
      .catch(error => console.log(error));
      
      navigate('/addshelf', { state: { warehouseData: warehouseName } });
    }
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
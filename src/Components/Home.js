import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Home = () => {
  
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');
  
  let jsonData;

  const doFetch = async() => {
    
    try {
      const response = await (fetch('/warehouse/createWarehouse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ warehouseName: warehouseName })
      }));
      jsonData = await response.json();
      return jsonData;

    } catch (error) {
      console.log(error)
    } 
  }


  const onClickHandler = async (event) => {
    event.preventDefault();
    if (warehouseName !== '') {
      await doFetch();
      navigate('/addshelf', { state: { warehouseData: jsonData.warehouse[0] } });
    }
  }

  return (
    <div className='Home'>
      <form onSubmit={onClickHandler}>
        <label>
          <input 
            type='text' 
            placeholder='new warehouse name here'
            value={warehouseName}
            onChange={(e) => setWarehouseName(e.target.value)}
          />
        </label>
        <button type='submit'>Create new warehouse</button>
      </form>
    </div>
  );
}

export default Home;
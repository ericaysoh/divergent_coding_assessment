import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Home = () => {
  
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');

  // const onClickHandler = () => {

  //   if (warehouseName !== '') {
  //     fetch ('/warehouse/createWarehouse', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ warehouseName: warehouseName })
  //     })
  //     .then(res => res.json())
  //     .then(data => setWarehouseData(data.warehouse) ) // -> {warehouse_id: 7, warehouse_name: 'eee'}
  //     .catch(error => console.log(error));
      
  //     console.log('warehousedata', warehouseData)
  //     navigate('/addshelf', { state: { warehouseData: warehouseData } });
  //   }
  // };
  
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
      {/* <button onClick={onClickHandler}>Create new warehouse</button> */}
    </div>
  );
}

export default Home;
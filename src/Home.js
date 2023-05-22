import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Home() {
  
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');

  const onClickHandler = () => {
    navigate('/addshelf');
    // take warehouseName and send to database, create new warehouse; the shelf page should have this warehouse name and id
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
        <input type='submit'></input>
      </form>
      <button onClick={onClickHandler}>Create new warehouse</button>
    </div>
  );
}

export default Home;
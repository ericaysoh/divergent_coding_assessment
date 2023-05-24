// import React from 'react';
import { useState } from 'react';

function Zone(props) {
  

  const options = [
    { label: 'Select zone', value: 'default' },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 },
    
  ];
     
  const [value, setValue] = useState(''); // doesn't have to be options.label

  // TODO: get rid of ln24 useState and ln38 value property; move ln44 <p> out to AddShelf.js using zone state

  const handleChange = (e) => {
    setValue(e.target.value);
    props.zoneStateFunc(e.target.value);
  };
     
  return (

  <div>
    <label>
    Zone:
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>{option.label}</option>
      ))}
    </select>
    </label>
    <p>You have selected Zone {value}!</p>
  </div>

  );


//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className='zone-dropdown'>
//       {/* <button onClick={handleOpen}>Select zone</button>
//       {open ? (
//         // <ul className='menu'>
//         //   <li className='menu-item'>
//         //     <button>Menu 1</button>
//         //   </li>
//         //   <li className='menu-item'>
//         //     <button>Menu 2</button>
//         //   </li>
//         // </ul> */}
//         <label>Zone:

//         <select>
//           <option default value='select zone'>Select zone</option>
//           <option value='1' onClick={() => console.log('hello1')}>1</option>
//           <option value='2'>2</option>
//           <option value='3'>3</option>
//           <option value='4'>4</option>
//           <option value='5'>5</option>
//           <option value='6'>6</option>
//           <option value='7'>7</option>
//           <option value='8'>8</option>
//           <option value='9'>9</option>
//           <option value='10'>10</option>
//           <option value='11'>11</option>
//           <option value='12'>12</option>
//         </select>
//         </label>
//     {/*    ) : null} */}
//     {/*    {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
//     </div>
//   )
};

export default Zone;
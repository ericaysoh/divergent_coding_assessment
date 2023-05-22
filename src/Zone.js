// import React from 'react';
import { useState } from 'react';

function Zone() {


  const options = [
    { label: 'Select zone', value: 'default' },
    { label: '1', value: 'Zone1' },
    { label: '2', value: 'Zone2' },
    { label: '3', value: 'Zone3' },
    { label: '4', value: 'Zone4' },
    { label: '5', value: 'Zone5' },
    { label: '6', value: 'Zone6' },
    { label: '7', value: 'Zone7' },
    { label: '8', value: 'Zone8' },
    { label: '9', value: 'Zone9' },
    { label: '10', value: 'Zone10' },
    { label: '11', value: 'Zone11' },
    { label: '12', value: 'Zone12' },
    
  ];
     
  const [value, setValue] = useState(options.label); // doesn't have to be options.label

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log('value', value)
  };
     
  return (

  <div>
    <label>
    Zone:
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
    </label>
    <p>You have selected {value}!</p>
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
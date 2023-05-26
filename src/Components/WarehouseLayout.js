import React from 'react';

const WarehouseLayout = (props) => {

  const Box = (props) => {
    return (
      <div className='box'>
          <p>Zone {props.num}</p>
      </div>
    )
  }

  return (
    <div className='layout'>
      <div className='topRow'>
      {/* match key with zone in conditional statement, if key is loosely equal to zone number*/}
      <Box key='1' num='1'></Box>
      <Box key='2' num='2'></Box>
      <Box key='3' num='3'></Box>
      <Box key='4' num='4'></Box>
      <Box key='5' num='5'></Box>
      <Box key='6' num='6'></Box>
      </div>
      <div className='bottomRow'>
      {/* match key with zone in conditional statement, if key is loosely equal to zone number*/}
      <Box key='7' num='7'></Box>
      <Box key='8' num='8'></Box>
      <Box key='9' num='9'></Box>
      <Box key='10' num='10'></Box>
      <Box key='11' num='11'></Box>
      <Box key='12' num='12'></Box>
      </div>
    </div>
  )
};

export default WarehouseLayout;
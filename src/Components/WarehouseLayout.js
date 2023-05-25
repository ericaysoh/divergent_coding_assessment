import React from 'react';

const WarehouseLayout = (props) => {

  const Box = () => {

    return (
      <div style={{
        backgroundColor: '#3334',
        borderRadius: 40,
        borderColor: 'purple',
        color: '#fff',
        minHeight: 200,
        padding: 12,
        width: 120,
      }}>
      </div>
    )
  }

  return (
    <div>
      <div className='topRow'>
      {/* match key with zone in conditional statement, if key is loosely equal to zone number*/}
      <Box key='1'>hello</Box>
      <Box key='2'></Box>
      <Box key='3'></Box>
      <Box key='4'></Box>
      <Box key='5'></Box>
      <Box key='6'></Box>
      </div>
      <div className='bottomRow'>
      {/* match key with zone in conditional statement, if key is loosely equal to zone number*/}
      <Box key='7'>hello</Box>
      <Box key='8'></Box>
      <Box key='9'></Box>
      <Box key='10'></Box>
      <Box key='11'></Box>
      <Box key='12'></Box>
      </div>
    </div>
  )
};

export default WarehouseLayout;
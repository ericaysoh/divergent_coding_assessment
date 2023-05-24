import React from 'react';

function WarehouseLayout(props) {

  const Box = () => {

    return (
      <div style={{
        backgroundColor: '#3334',
        borderRadius: 40,
        borderColor: 'purple',
        color: '#fff',
        minHeight: 100,
        padding: 12,
        width: 120,
      }}>
      </div>
    )
  }

  return (
    <div>
      <Box key='1'>hello</Box>
      <Box key='2'></Box>
      {/* match key with zone in conditional statement, if key is loosely equal to zone number*/}
    </div>
  )
};

export default WarehouseLayout;
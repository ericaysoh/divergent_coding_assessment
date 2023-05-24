import React from 'react';

function WarehouseLayout() {

  const Box = () => {

    return (
      <div style={{
        backgroundColor: '#3334',
        borderRadius: 40,
        borderColor: 'purple',
        color: '#eee',
        minHeight: 100,
        padding: 12,
        width: 120,
      }}>
      </div>
    )
  }

  return (
    <div>
      <Box></Box>
      <Box></Box>
    </div>
  )
};

export default WarehouseLayout;
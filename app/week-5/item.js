import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className="bg-blue-900 text-white p-2 flex flex-col mb-2 "style={{ width: '350px', marginTop: '10px'  }}>
      <div>
        <p className="text-xl font-bold">{name}</p>
      </div>
      <div>
        <p className="text-sm">Buy {quantity} in {category}</p>
      </div>
    </div>
  );
};

export default Item;

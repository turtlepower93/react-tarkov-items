import React from 'react';
import './ItemCard.css'

function ShowItemPage({item}) {


  return (
    <div className="detail-card">
        <h3>{item.name} is of type: {item.type}</h3>
    </div>
  );
}

export default ShowItemPage;
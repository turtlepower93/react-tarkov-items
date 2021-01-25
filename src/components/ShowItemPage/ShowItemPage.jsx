import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import {useLocation} from 'react-router-dom';

function ShowItemPage({props}) {

  const { state: {lootItem} } = useLocation()

  return (
    <>
      <h1>Loot Details</h1>
      <ItemCard
        key={lootItem._id}
        item={lootItem}
      />
    </>
  );
}

export default ShowItemPage;
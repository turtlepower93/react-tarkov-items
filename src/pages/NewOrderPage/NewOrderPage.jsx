import React, {useState, useEffect, useRef} from 'react'
import LootList from '../../components/LootList/LootList'

export default function NewOrderPage({lootItems}) {

    return (
        <>
            <h1>New Order Page</h1>
            <LootList lootItems={lootItems}/>
        </>
    )
}
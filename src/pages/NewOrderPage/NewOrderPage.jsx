import React, {useState, useEffect, useRef} from 'react'
import LootList from '../../components/LootList/LootList'

export default function NewOrderPage({lootItems}) {

    return (
        <>
            <h1>New Order Page</h1>
            <table>
                <thead>
                    <th>Name:</th>
                    <th>Type:</th>
                </thead>
                <tbody>
                        <LootList lootItems={lootItems}/>
                </tbody>
            </table>
            {/* <LootList lootItems={lootItems}/> */}
        </>
    )
}
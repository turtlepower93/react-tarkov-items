import React, {useState, useEffect, useRef} from 'react'
import './LootListItem.css'

export default function LootListItem({ lootItem }) {



    return (
        <>
        <tr>
                {
                    lootItem.type==='Meds' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 💊</td>
                    </> : <></>
                }
                {
                    lootItem.type==='Provisions' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 🍔</td>
                    </> : <></>
                }
                {
                    lootItem.type==='Barter' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 💰</td>
                    </> : <></>
                }
        </tr>
        </>
    )
}
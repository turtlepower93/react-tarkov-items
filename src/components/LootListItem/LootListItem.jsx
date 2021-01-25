import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link>
                    </> : <></>
                }
                {
                    lootItem.type==='Provisions' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 🍔</td>
                        <Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link>
                    </> : <></>
                }
                {
                    lootItem.type==='Barter' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 💰</td>
                        <Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link>
                    </> : <></>
                }
        </tr>
        </>
    )
}
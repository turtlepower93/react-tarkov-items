import React, {useState, useEffect, useRef} from 'react'
import LootList from '../../components/LootList/LootList'
import AddItemPage from '../AddItemPage/AddItemPage'
import './NewOrderPage.css'

export default function NewOrderPage({lootItems, addNewLoot}) {

    return (
        <div className="grid-container">
            <div className='add-item-form'>
                <AddItemPage addNewLoot={addNewLoot}/>
            </div>
            <div className="display-items">
                <table>
                    <thead>
                        <th>Name:</th>
                        <th>Type:</th>
                    </thead>
                    <tbody>
                            <LootList lootItems={lootItems}/>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
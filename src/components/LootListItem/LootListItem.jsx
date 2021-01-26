import { Link } from 'react-router-dom'
import './LootListItem.css'

export default function LootListItem({ lootItem, handleDeleteItem }) {

    return (
        <>
        <tr>
                {
                    lootItem.type==='Meds' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 💊</td>
                        <td><Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link></td>
                        <td><button className='delete-btn' onClick={() => handleDeleteItem(lootItem._id)}>DELETE</button></td>
                    </> : <></>
                }
                {
                    lootItem.type==='Provisions' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 🍔</td>
                        <td><Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link></td>
                        <td><button className='delete-btn' onClick={() => handleDeleteItem(lootItem._id)}>DELETE</button></td>
                    </> : <></>
                }
                {
                    lootItem.type==='Barter' ?
                    <>
                        <td>{lootItem.name}</td> 
                        <td>{lootItem.type} 💰</td>
                        <td><Link to={{ pathname: '/details', state:{lootItem}}}> Details </Link></td>
                        <td><button className='delete-btn' onClick={() => handleDeleteItem(lootItem._id)}>DELETE</button></td>
                    </> : <></>
                }
        </tr>
        </>
    )
}
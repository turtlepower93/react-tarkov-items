import LootList from '../../components/LootList/LootList'
import AddItemPage from '../AddItemPage/AddItemPage'
import './NewOrderPage.css'

export default function NewOrderPage({lootItems, addNewLoot, handleDeleteItem}) {

    return (
        <div className="grid-container">
            <div className='add-item-form'>
                <AddItemPage addNewLoot={addNewLoot}/>
            </div>
            <div className="display-items">
                <table>
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Type:</th>
                        </tr>
                    </thead>
                    <tbody>
                            <LootList lootItems={lootItems} handleDeleteItem={handleDeleteItem}/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
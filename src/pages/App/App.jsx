import {useState, useEffect} from 'react'
import './App.css';
import * as itemsAPI from '../../utilities/items-api'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import UpdateItemPage from '../UpdateItemPage/UpdateItemPage'
import ShowItemsPage from '../ShowItemPage/ShowItemPage'
import AddItemPage from '../AddItemPage/AddItemPage'
import NavBar from '../../components/NavBar/NavBar'
import { useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import { Redirect,Route,Switch } from 'react-router-dom'


export default function App() {
  
  const [user, setUser] = useState(getUser());
  const [lootItems, setLootItems] = useState([]);

  const history = useHistory();

  useEffect(function() {
      async function getItems() {
        const items = await itemsAPI.getAll();
        setLootItems(items);
      }
      getItems();
    }, []);

  async function addNewLoot(lootData) {
      const newItem = await itemsAPI.create(lootData);
      setLootItems([...lootItems, newItem])
      history.push('/orders/new')
  }
  
  async function handleUpdateItem(updatedItemData) {
    const updatedItems = await itemsAPI.update(updatedItemData);
    // Using map to replace just the puppy that was updated
    const newItemsArray = lootItems.map(i =>
      i._id === updatedItems._id ? updatedItems : i
    );
    setLootItems(newItemsArray);
  }

  async function handleDeleteItem(id) {
    await itemsAPI.deleteOne(id);
    setLootItems(lootItems.filter(i => i._id !== id))
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage lootItems={lootItems} addNewLoot={addNewLoot} handleDeleteItem={handleDeleteItem}/>
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Route path="/item/create">
                <AddItemPage addNewLoot={addNewLoot}/>
              </Route>
              <Route exact path='/details'>
                <ShowItemsPage />
              </Route>
              <Route exact path='/edit'>
                <UpdateItemPage handleUpdateItem={handleUpdateItem}/>
              </Route>
              <Redirect to="/orders/new" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
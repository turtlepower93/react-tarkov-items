import {useState, useRef, useEffect} from 'react'
import './App.css';
import * as itemsAPI from '../../utilities/items-api'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import AddItemPage from '../AddItemPage/AddItemPage'
import NavBar from '../../components/NavBar/NavBar'
import { useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import { Redirect,Route,Switch } from 'react-router-dom'


export default function App() {
  
  const [user, setUser] = useState(getUser());
  const [newLoot, setNewLoot] = useState({});
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
    

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage lootItems={lootItems}/>
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Route path="/item/create">
                <AddItemPage addNewLoot={addNewLoot}/>
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
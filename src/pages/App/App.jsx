import {useState} from 'react'
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
import { Redirect,Route,Switch } from 'react-router-dom'


export default function App() {
  
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage />
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
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
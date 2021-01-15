import {useState} from 'react'
import './App.css';
import NewOrderPage from '../pages/NewOrderPage/NewOrderPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage'
import NavBar from '../components/NavBar/NavBar'
import { Redirect,Route,Switch } from 'react-router-dom'


export default function App() {
  
  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      <>
      <NavBar />
      <h1>Prapor's Shop</h1>
      {user ?
      <Switch>
          <Route path='/orders/new'>
            <NewOrderPage />
          </Route>
          <Route path='/orders'>
            <OrderHistoryPage />
          </Route>
          <Redirect to="/orders" />
        </Switch>
        :
        <AuthPage />
      }
      </>
    </main>
  );
}
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <NavLink exact activeStyle={{background:'black'}} to="/orders">Order History</NavLink>
            <NavLink exact activeStyle={{background:'black'}} to="/orders/new">New Order</NavLink>
      </nav>
    )
}
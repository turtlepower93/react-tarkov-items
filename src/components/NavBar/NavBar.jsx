import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null)
    }

    return (
        <nav>
            <h3 className="prapors-shop">Prapors Shop</h3>
            {/* <NavLink exact activeStyle={{background:'black'}} to="/orders">Order History</NavLink> */}
            <NavLink exact activeStyle={{background:'black'}} to="/orders/new">New Order</NavLink>
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    )
}
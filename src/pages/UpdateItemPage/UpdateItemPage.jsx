import React, { useState } from 'react' 
import { useLocation } from 'react-router-dom'
import './UpdateItemPage.css'
import {useHistory} from 'react-router-dom'

export default function UpdateItemPage({ handleUpdateItem }) {
    
    const location = useLocation()
    const [formData, setFormData] = useState(location.state.lootItem);

    const history = useHistory();

    function handleSubmit(evt) {
        evt.preventDefault();
        const newData = {...formData, name:evt.target.name.value, type:evt.target.type.value} 
        handleUpdateItem(newData)
        history.push('/')
    }

    function handleChange(evt) {
        const newItem = {
            ...formData,
            name: evt.target.name.value,
            type: evt.target.name.value
        }
        setFormData(newItem)
    }

    return (
        <div className="create-item-container">
        <h1>Update An Item</h1>
        <h5>Trial version... </h5>
        {/* //add submit function that pushes Name and Type back to the server, and to the main page? */}
            <div className="form-container" onSubmit={handleSubmit}>
                <form>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Type:</label>
                    <select name="type">
                        <option name="type" value={formData.type}>Provisions</option>
                        <option name="type" value={formData.type}>Meds</option>
                        <option name="type" value={formData.type}>Barter</option>
                    </select>
                    {/* <input
                        type="text" 
                        name="type" 
                        placeholder="add type here"
                        // value={formData.type}
                        onChange={handleChange}
                        required
                    /> */}
                    <button type="submit">Create Item</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState, useEffect, useRef } from 'react' 

export default function AddItemPage({ addNewLoot }) {

    const [formData, setFormData] = useState({
        name: '',
        type: '',
    });

    function handleSubmit(evt) {
        evt.preventDefault()
        const newData = {name:evt.target.name.value,type:evt.target.type.value} 
        addNewLoot(newData)
    }

    function handleChange(evt) {
        const newItem = {
            name: evt.target.name.value,
            type: evt.target.name.value
        }
        setFormData(newItem)
    }

    return (
        <>
        <h1>Create An Item</h1>
        {/* //add submit function that pushes Name and Type back to the server, and to the main page? */}
            <div className="form-container" onSubmit={handleSubmit}>
                <form>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="add name here"
                        // value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Type:</label>
                    <input
                        type="text" 
                        name="type" 
                        placeholder="add type here"
                        // value={formData.type}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Create Item</button>
                </form>
            </div>
        </>
    )
}
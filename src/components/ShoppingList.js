import React, { useState } from "react"
import AddNewItem from "./AddNewItem"
import ItemsList from "./ItemsList"

export default function ShoppingList() {
    const [items, setItems] = useState([])

    function addItem(description) {
        // Using the getTime method from the Date class to get a numeric value (milliseconds) to use it as an id
        setItems(prevState => [...prevState, {id: new Date().getTime(), description}])
    }

    function deleteItem(id) {
        setItems(prevState => prevState.filter(item => item.id !== id))
    }
    
    function toggleCrossoutItem(id, done) {
        setItems(prevState => prevState.map(item => {
            if (item.id === id) {
                return { ...item, done: !done }
            }
            return item
        }))
    }

    return (
        <div>
            <AddNewItem addItem={addItem}/>
            <ItemsList items={items} deleteItem={deleteItem} toggleCrossoutItem={toggleCrossoutItem} />
        </div>
    )
}
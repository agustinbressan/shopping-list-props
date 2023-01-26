import React from "react"

export default function ItemActions({item, deleteItem, toggleCrossoutItem}) {
    const { id, description, done } = item

    return (
        <>
            <button onClick={() => toggleCrossoutItem(id, done)} title={done ? `Restore item (${description})` : `Crossout item (${description})`}>{done ? '🔄' : '✅'}</button>
            <button onClick={() => deleteItem(id)} title={`Delete item (${description})`}>❌</button>
        </>
    )
}
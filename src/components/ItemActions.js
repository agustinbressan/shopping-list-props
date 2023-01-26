import React from "react"

export default function ItemActions({item, onDeleteItem, onToggleCrossoutItem}) {
    const { id, description, done } = item

    return (
        <>
            <button onClick={() => onToggleCrossoutItem(id, done)} title={done ? `Restore item (${description})` : `Crossout item (${description})`}>{done ? '🔄' : '✅'}</button>
            <button onClick={() => onDeleteItem(id)} title={`Delete item (${description})`}>❌</button>
        </>
    )
}
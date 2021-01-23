import React, {useState, useEffect, useRef} from 'react'

export default function LootListItem({ lootItem }) {

    return (
            <div>
                {lootItem.name} {lootItem.type}
            </div>
    )
}
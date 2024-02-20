import React, { useState } from 'react'

export default function Counter() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    function handleAddInput() {
        const tempList = list;
        tempList.push(input);
        setList(tempList);
    }
    console.log(list);
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                <input type='text' value={input} onChange={(event)=> {
                    setInput(event.target.value)
                }}/>
                <button onClick={handleAddInput}>Add Item</button>
                {
                    list.map(listItem => {
                        return <p key={listItem}>{listItem}</p>
                    })
                }
            </div>

        </>
    )
}
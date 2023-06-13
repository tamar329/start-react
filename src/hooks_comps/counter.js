import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState();
    const [user, setUser] = useState("koko");

    const onAdd1 = () => {
        setCounter(counter + 1);
        if (counter + 1 > 10) {
            setUser("jack")
        }
    }

    return (
        <div className='container'>
            <h2>Counter {user}: {counter}</h2>
            <button onClick={onAdd1}>Add 1</button>
            <button onClick={() => {
                setCounter(counter - 5)
            }} >reduce 5</button>
        </div>
    )
}
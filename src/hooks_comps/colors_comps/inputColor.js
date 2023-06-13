import React, { useState, useRef } from 'react'

export default function InputColor() {
    const [color, setColor] = useState("silver");
    const inputRef = useRef();
    const onChangeColor = () => {
        setColor(inputRef.current.value);
    }
    return (
        <div className='text-center'>
            <h2 style={{ color: color }}>Enter your favorite color: {color}</h2>
            <select ref={inputRef} onChange={onChangeColor}>
                <option value={""}></option>
                <option value={"red"}>red</option>
                <option value={"orange"}>orange</option>
                <option value={"green"}>green</option>
                <option value={"blue"}>blue</option>
            </select>
        </div>
    )
}

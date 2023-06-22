import React from 'react'

export default function TodoDelete() {
    const deleteTodo = () => {
        let todoBody = {
            name:nameRef.current.value,
            time:timeRef.current.value,
            id: Date.now()
        }
        dispatch(deleteTodo({todo:todoBody}))
    }

    return (
        <div>T</div>
    )
}

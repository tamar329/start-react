import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoList() {
    const { todos_ar } = useSelector(store => store.todosSlice)
    const dispatch = useDispatch()

    return (
        <div className='container col-md-6'>
            <h2>List of Todos:</h2>
            <div className='row'>
                {todos_ar.map(item => {
                    return (
                        <div key={item.id} className='col-md-11 my-2 border'>
                            <h2>{item.name} - {item.time} <button className='btn btn-danger' onClick={dispatch()}>X</button></h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

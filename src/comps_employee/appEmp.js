import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InputEmp from './inputEmp'
import ListEmp from './listEmp'

export default function AppEmp() {
    const [ar, setAr] = useState([]);
    const [company, setCompany] = useState("")
    // אוסף פארמס מהכתובת
    const params = useParams();

    useEffect(() => {
        doApi()
    }, [params["company"]])

    const doApi = async () => {
        //req.params.company
        let searchQ = params["company"] || "Monkeys";
        setCompany(searchQ)
        let url = `https://randomuser.me/api/?results=10&seed=${searchQ}`;
        let resp = await axios.get(url);
        console.log(resp.data.results);
        setAr(resp.data.results);
    }

    return (
        <div className='container'>
            <InputEmp />
            <ListEmp ar={ar} company={company} />
        </div>
    )
}

מאור גבאי, עכשיו
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InputEmp() {
    // יודע לשגר לכותבת שנכניס לו לארגיומנט
    const nav = useNavigate();
    const inpRef = useRef();

    return (
        <div className='row p-2'>
            <div className='col-md-6 d-flex'>
                <input ref={inpRef} placeholder='search for company...' type="search" className='form-control' />
                <button onClick={() => {
                    nav("/employee/" + inpRef.current.value)
                }} className='btn btn-dark'>Search</button>
            </div>
            {/* TODO: make sort work */}
            <div className='col-md-3 d-flex align-items-center'>
                <span>Sort: </span>
                <select className='form-select ms-2'>
                    <option value="gender">gender</option>
                    <option value="nat">national</option>
                </select>
            </div>
        </div>
    )
}
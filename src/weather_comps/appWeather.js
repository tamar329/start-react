import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeahterInfo from './weahterInfo'
import WeatherInput from './weatherInput'

export default function AppWeather() {
    const [infoObj, setInfoObj] = useState({});

    useEffect(() => {
        doApi("חיפה")
    }, [])

    const doApi = async (_townName) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${_townName}&appid=6297078141c126f9de9aafb980ced2bc
        &units=metric`;
        let resp = await axios.get(url);
        console.log(resp.data);
        setInfoObj(resp.data);
    }

    return (
        <div>
            <WeatherInput doApi={doApi} />
            <WeahterInfo item={infoObj} />
        </div>
    )
}
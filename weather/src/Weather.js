import React, { useEffect, useState } from 'react'

function Weather() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Karachi')
    const API_KEY = 'ca9b0ad055aa0c42f07797a0d69992ae';

    useEffect(() => {
        Weather();
    }, [search])

    const Weather = async () => {
        const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`)
        const response = await url.json()
        setCity(response.main)
        console.log(response.main);
    }
    return (
        <div className="container">
            <div>
                <h1 className='heading'>WEATHER  APP</h1>
            </div>
            <div className='inputData'>
                <input className='search' type='text' placeholder='Enter City Name'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='info'>
                <h2 className='city'>
                    <i class="fas fa-street-view"></i>{search}
                </h2>
                {!city ? (
                    <p>No Data Found</p>
                )
                    :
                    (
                        <>
                            <h1>
                                {city.temp} Cel
                            </h1>
                            <hr />
                            <p className='temp_minmax'>min-Temp: {city.temp_min}  Cel || max-Temp: {city.temp_max}  Cel</p>
                            <hr />
                            <p className='temp_minmax'>Humidity: {city.humidity}  Cel || Pressure: {city.pressure}  Cel</p>

                        </>
                    )}

            </div>
        </div>
    )
}

export default Weather

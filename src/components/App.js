import React, { useEffect, useState } from 'react'
import fetchWeatherApi from '../api/fetchWeather'
import Header from './Header';
import Search from './Search';
const key = '55fe789aed680b0611ee4ed1432c0f7e';

const App = () => {

    const [search,setSearch] = useState('Mandalay')
    const [debounceText, setDebounceText] = useState(search); 
    const [result, setResult] = useState(null); 
    const [error, setError] = useState(false); 
    
    useEffect(() => {

        const setTimeOutId = setTimeout(() => {
        setError(false); 
           setDebounceText(search);
        },500); 

        return () => clearTimeout(setTimeOutId); 

    }, [search]); 

    useEffect(() => {

        const fetchWeather =  () => {
           fetchWeatherApi.get('data/2.5/weather', {
                params: {
                    q: debounceText,
                    appid: key
                }
            })
            .then(result => {
                setResult(result.data); 
                console.clear();
            })
            .catch(e =>  {
                console.log('Error', e); 
                setError(true); 
            })
        }
        search && fetchWeather(); 
        

    },[debounceText])

    const onTextSubmit = q => setSearch(q)

    return (
        <div>
            <Search onTextSubmit={onTextSubmit}/>
            {error && <h1>Please make sure that you typed the correct city name</h1> }
            <Header name={result}/>
        </div>
    )
}

export default App

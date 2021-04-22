import React, { useEffect, useState } from 'react'
import fetchWeatherApi from '../api/fetchWeather'
import Description from './Description';
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
        debounceText && fetchWeather(); 
        

    },[debounceText])
    console.log(result)
    const onTextSubmit = q => setSearch(q)

    return (
        <div className="flex justify-around w-screen h-screen flex-col">
            <div className="mt-4 flex justify-center w-100 h-20 bg-gray-50 shadow-md rounded-md flex-col items-center mb-3">
                <Search onTextSubmit={onTextSubmit}/>
                {error && <h4 className="text-base mt-3 text-red-300">Please make sure that you typed the correct city name</h4> }
                <Header name={result}/>
            </div>
            <Description result={result}/>
        </div>
    )
}

export default App

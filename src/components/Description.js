import React from 'react'
import covertKelvinToC from '../util';

const Description = ({result}) => {
    if(result) console.log(result.weather[0].icon)
    return result ? 
    (
        <div className="mb-20 w-auto mx-auto h-80 bg-grey-50 shadow-lg px-10 flex flex-col items-center rounded-3xl">
            <div className="shadow-sm rounded-xl">
                <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} className="w-max text-center" alt=""/>
            </div>
            <div className="flex flex-col justify-around h-40">
                <h3 className="text-center text-sm up">{result.weather[0].main}, {result.weather[0].description} </h3>
                <h2 className="text-center text-xl leading-tight font-bold tracking-wider">Temperature: {covertKelvinToC(result.main.temp)}</h2>
                <h4 className="text-center"><span className="text-blue-500 font-semibold">Min: {covertKelvinToC(result.main.temp_min)},</span>  <span className="font-semibold text-red-500">Max: {covertKelvinToC(result.main.temp_max)}</span> </h4>
            </div>
        </div>)
        : (
            <h3>Hi</h3>
        )
    
};

export default Description

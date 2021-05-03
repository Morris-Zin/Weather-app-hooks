import React from 'react'

const Header = (props) => {
    const name = props.name;  

    return name ?  (
        <div>
            <h1 className="mt-2 text-md font-bold font-sans tracking-wide">Location: <span className="text-blue-400">{name.name}</span> <span className="text-lg text-red-300 uppercase">{name.sys.country}</span></h1>
        </div>
    ) : <h1>Loading ... </h1> 
}

export default Header

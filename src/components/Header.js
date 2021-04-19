import React from 'react'
import Spinner from 'react-spinner-material';

const Header = (props) => {
    const name = props.name;  

    return name ?  (
        <div>
            <h1>{name.name}, {name.sys.country}</h1>
        </div>
    ) : <Spinner />
}

export default Header

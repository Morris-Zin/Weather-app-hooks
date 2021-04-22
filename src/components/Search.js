import React,{useState} from 'react'

const Search = ({onTextSubmit}) => {
    const [text, setText] = useState('')

    const onTextChange = (e) => {
        setText(e.target.value); 
        onTextSubmit(e.target.value)
    }

    return (
        <div className="flex flex-col mt-6">   
            <label htmlFor="search-bar" className="text-center text-gray-darkest mt-12 text-lg font-bold uppercase mb-3 tracking-wide">Search for city ...</label>
            <input id="search-bar" autoComplete="off"  className=" z-5 focus:border-gray-200 border border-gray-100 mt-4 apperance-none text-gray-darkest rounded-lg shadow-lg outline-none px-3 py-2 text-gray-500" type="text" value={text} onChange={onTextChange} />
        </div>  
    )
}

export default Search

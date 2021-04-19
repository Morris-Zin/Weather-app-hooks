import React,{useState} from 'react'

const Search = ({onTextSubmit}) => {
    const [text, setText] = useState('')

    const onTextChange = (e) => {
        setText(e.target.value); 
        onTextSubmit(e.target.value)
    }

    return (
        <div>   
            <input type="text" value={text} onChange={onTextChange} />
        </div>
    )
}

export default Search

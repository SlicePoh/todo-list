import React, { useState } from 'react'

export default function TodoForm(props) {
    
    const [input, setInput] = useState('');
    
    const handleChange = o => {
        setInput(o.target.value)
    }

    const onSubmit = (o) => {
        o.preventDefault();
        props.addTask({
            id: Math.floor(Math.random()*1000000),
            text: input,
            isComplete: false
        })
        setInput('')
    }
    return (
        <div className="p-6">
            <input type="text" placeholder='Add a Todo' onChange={handleChange} className=" textBox border-2 border-white bg-black h-12 mx-2 p-2 rounded-lg  " value={input} />
            <button type="submit" onClick={onSubmit} className=" submit h-12 bg-indigo-800 hover:bg-indigo-600 border-2 border-white mx-2 p-2 rounded-lg ">Submit</button>
        </div>
    )
}


import {useState} from 'react'

export default function AddTask({onAddTask}){

    const [inputText, setInputText] = useState('')

    const handleInput = (e)=>{
        setInputText(e.target.value)
    }

    return (
        <>
            <input onChange={handleInput} value={inputText} type="text" placeholder= "Add Task" />
            <button onClick={()=>onAddTask(inputText)}>Add</button>
            <br /> 
        </>
    );
}
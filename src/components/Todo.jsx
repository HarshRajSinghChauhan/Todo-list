import { useState } from 'react'
import './Todo.css'

export default function Todo() {

    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("")
    
    let addTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("")
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }
    return (
        <div className="container">
            <h1>TODO LIST</h1>
            <div className='input'>
                <input type="text" placeholder="Enter the task" value={newTodo} onChange={updateTodoValue}/>
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo) =>{
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
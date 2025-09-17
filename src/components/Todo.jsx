import { useState } from 'react';
import './Todo.css';
import { v4 as uuidv4} from "uuid";
export default function Todo() {

    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("")
    
    let addTask = () => {
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
        setNewTodo("")
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => prevTodos.filter((todos) => todos.id != id)); 
    }
    return (
        <div className="container">
            <h3>TODO LIST</h3>
            <div className='input'>
                <input type="text" placeholder="Enter the task" value={newTodo} onChange={updateTodoValue}/>
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            <span>{todo.task}</span> 
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button id="editBtn">Edit</button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button id ='dltBtn' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
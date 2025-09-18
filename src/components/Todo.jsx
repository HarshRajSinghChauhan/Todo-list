import { useState } from 'react';
import './Todo.css';
import { v4 as uuidv4 } from "uuid";
export default function Todo() {

    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("")

    let addTask = () => {
        if (newTodo.trim() === "") {
        alert("Please enter a task!");
        return;
    }
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("")
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todos) => todos.id != id));
    }

    let markDone = (id) => {
        setTodos((todos) => (
            todos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                }else{
                    return todo;
                }
            })
        ))
    }


    return (
        <div className="container">
            <h3>TODO LIST</h3>
            <div className='input'>
                <input type="text" placeholder="Enter the task" value={newTodo} onChange={updateTodoValue} />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={ todo.isDone ? {textDecoration : "Line-through"} : {}}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button id="editBtn">Edit</button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button id='markBtn' onClick={() => markDone(todo.id)}>Mark Done</button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button id='dltBtn' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
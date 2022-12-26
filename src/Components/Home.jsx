import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const todos = [
    {
        id: '1111',
        text: 'first test task',
        date: new Date().toLocaleDateString(),
        isComplited: false
    },
    {
        id: '2222',
        text: 'second test task',
        date: new Date().toLocaleDateString(),
        isComplited: false
    },
    {
        id: '3333',
        text: 'last test task',
        date: new Date().toLocaleDateString(),
        isComplited: true
    },
]

const Home = () => {
    const [state, setState] = useState(todos);

    function toggle(id) {
        setState(state.map(todo => {
            if (todo.id === id) {
                todo.isComplited = !todo.isComplited;
            }
            return todo;
        }))
    }

    function rem(id) {
        let newState = [...state].filter(item => {
           return item.id !== id; 
        } )
        setState(newState);
    }

    function addTodo (text) {
        setState([{
            id: new Date(),
            text,
            date: new Date().toLocaleDateString(),
            isComplited: false
        }, ...state]);
    }

    return (
        <div className="Home">
            <h1>ToDos</h1>
            {state.map(todo => (
               <Task key={todo.id} todo={todo} toggle={() => toggle(todo.id)} rem={() => rem(todo.id)}/> 
            ))}
            <AddTask add={addTodo}/>
        </div>
    )
}

export default Home;
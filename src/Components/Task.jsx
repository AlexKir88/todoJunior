import CheckBox from "./CheckBox";
import Delete from './Delete'

const Task = ({todo, toggle, rem}) => {
    function onClick() {
        toggle();
    }
    
    const textDecor = todo.isComplited && 'line-through';
    return (
        <div tabIndex={0} className="Task" >
            <div onClick={onClick}>
                <CheckBox isComplited={todo.isComplited} />
                <p style= {{textDecoration: textDecor }}>{todo.text} {'-  date:'} {todo.date}</p>
            </div>
            <Delete rem={rem}/>
        </div>
    )
}

export default Task;
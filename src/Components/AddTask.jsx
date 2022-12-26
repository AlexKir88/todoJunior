import { useState } from "react";

let AddTask = ({add}) => {
    const [state, setState] = useState();
    function onChange(e) {
        setState(e.target.value);
    }

    function onKeyDown(e) {
        if (e.code === 'Enter') {
            add(e.target.value)
            e.target.value = '';
        }  
    }
    return (
        <div className="AddTask">
            <p>add task: </p>
            <input type="text" placeholder="   Input text" onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}

export default AddTask;
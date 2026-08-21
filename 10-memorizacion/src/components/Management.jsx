import { useState } from "react";
import Employees from "./Employees";
import Task from "./Task";


function Management() {

    const [name, setName] = useState();
    
    const assignManager = e =>{
        setName(e.target.value)
    }

    return (
        <div>

            <h1>The boss's name is : {name} </h1>
            <input type="text" onChange={assignManager} placeholder="Enter your manager name."/>

            <h2>List of employees</h2>
            <p>The users are managed by {name} and come from JSONPlaceholder.</p>
            <Employees/>

            <Task />
        </div>
    )
}

export default Management
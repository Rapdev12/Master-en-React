import { useMemo, useState } from "react";


function Task() {


  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(20)

  const saveTasks = e => {
    e.preventDefault();

    setTasks(tasks => [...tasks, e.target.title.value]);

    console.log(tasks)
  };

  const deleteTask = id =>{
      // Filtrar las tareas a borrar
      
      let newTask = tasks.filter((task, index)=> index !== id);

      //Set State, guardar el nuevo listado
      setTasks(newTask);

  };

  const addCounter = e =>{
    e.preventDefault();
    setCount(count + 1)
  };

  const pastCounter = (accumulated) =>{
    for(let i = 0; i<= accumulated; i++){
      console.log("Executing accumulation of past counters...");

    }
    return `Overdue task counter: ${accumulated}`
  }

  const memoCount = useMemo(()=>pastCounter(count), [count]);


  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>

      <h1> My task </h1>

      <form onSubmit={saveTasks} style={{ marginBottom: "20px" }}>
        <input type="text" name="title" placeholder="Add to Task" />

        <button type="submit">Add Task</button>
      </form>

       <h3>{memoCount}</h3>

      <h3>Contador manual de tareas: {count} </h3>
      <button onClick={addCounter}>Adds</button>

      <h3>List to Task</h3>

      <ul>
        {tasks.map((tasks, index) => {
          return (<li key={index} >
            {tasks}
             &nbsp;
            <button onClick={()=> deleteTask(index)}>Delete</button>
            </li>)
        })
        }
      </ul>

    </div>
  )
}

export default Task
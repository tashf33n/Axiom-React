
import { useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState([])
    const [isEdit, setEdit] = useState(false)
    const [updateIndex, setIndex] = useState(null)
    
    const AddTodo = (e) => {
        console.log('task', task)
        if(!task?.length){
            return console.log("Please enter task first")
        }

        arr.push(task)
        setArr([...arr])
        setTask('')        
    }
    const deleteTodo = (index) => {
                // console.log('index', index);
                arr.splice(index, 1)
                setArr([...arr])
                cancelUpdate()
                   
    }

    const editTodo = (index) => {
            setTask(arr[index])
            setEdit(true)
            setIndex(index)
    }

    const cancelUpdate = () => {
        setTask('')
        setEdit(false)
        
     }

    const updateTask = () => {
        arr[updateTask] = task

        setTask('')
        setEdit(false)
        setIndex(null)
        setArr([...arr])
    }

    return (
        <div>
            <h1>Todo App</h1>        

            <div>
                <input name="task" 
                        placeholder="Add Todo"
                        onChange = {e => setTask(e?.target?.value)}
                        value={task}
                        />
                        {!isEdit ? <button onClick={AddTodo}>Add Task</button> : <span> <button onClick={updateTask}>Update</button>
                        &nbsp;
                          <button onClick={cancelUpdate}>Cancel</button>   
                          </span>}
                        

                        
            </div>
            <ul>
                {arr?.map((v, i) => {
                return <li key={i}>
                <span>{v}</span>
                &nbsp;
                <button onClick={() => editTodo(i)}>Edit</button>
                &nbsp;
                    <button onClick={() => deleteTodo(i)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Todo;

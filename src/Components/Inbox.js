import React, { useRef, useState } from 'react'

export default function Inbox(props) {
    const [newTask,setnewTask] = useState(false)
    const titleRef = useRef() 
    const calendarRef = useRef()
    const newTaskHandler = ()=>{
        setnewTask(true);
    }
    const cancelHandler = ()=>{
        setnewTask(false);
    }
    const addHandler =(e)=>{
      e.preventDefault()
      if(titleRef.current.value === ""){
        window.alert("Task cannot be empty");
        return;
      }
      const newObj = {
        number: props.list.length + 1,
        title: titleRef.current.value,
        date : new Date(calendarRef.current.value),
      }
      props.append(newObj);
      setnewTask(false)

    }
  return (
    <div>
        <div className='addBtn'>
            {!newTask && (
                <button type="button" className='btn btn-success' onClick={newTaskHandler}>+Add New</button>
            )}            

        </div>

        {newTask && (
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Task</label>
                    <input type="text" class="form-control" ref={titleRef} placeholder='Enter you task'/>
                    <div id="emailHelp" class="form-text">Be Productive.</div>
                 </div>
                <div className="buttons">
                    <button type="button" class="btn btn-outline-success" onClick={addHandler}>Add Task</button>
                    <button style={{marginLeft:'9px', marginRight:'9px'}} type="button" class="btn btn-close" onClick={cancelHandler}></button>
                    <input style={{padding:'4px', borderRadius:'5px'}} type="date" ref={calendarRef} defaultValue="2023-06-01" />
                </div>
            </form>
        )}



        <div>
            <br />
            <br />
            <h1>List of tasks will be shown here.</h1>
            {props.list.map((listItem)=>{
                return (
                   

                <div class="card">
                    <div class="card-body card-todo">
                    <div>{listItem.title}
                        </div>
                        <div> 
                            {listItem.date.toLocaleDateString()}
                            </div>
                    </div>
                </div>

                )
            })}
        </div>



    </div>
  )
}

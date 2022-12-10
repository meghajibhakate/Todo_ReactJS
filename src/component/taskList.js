import { useState } from "react";

// Child Component Name
function TaskList(props) {
    // console.log(props)

   


    // return JSX
    return (
        <div className="task-list">
            <h3 className="task-list-header">Task List</h3>


            {/* JavaScript  Start*/}
            {props.task.map((taskname, index) => {
                return (

                    <div className="task-list-item" key={index}>
                        <div className="task1">
                            <input className="task-Input" type="checkbox" onClick={() => props.completetask(index)} />
                            
                            {
                                props.clicked===index ?
                                    <div >
                                        <input className="aditInput"  type="text" defaultValue={taskname}  onChange={props.newInput}  />
                                        <img src="/assets/check.png" alt="check" onClick={() =>props.tick(index)} />
                                    </div>

                                    :
                                    <div className="div2">
                                        <p className="task-name">{taskname}</p>
                                        <img className="edit-img" src="/assets/edit.png" onClick={() =>props.edit(index)} />
                                    </div>
                            }
                        </div>
                        <div className="task2">
                            

                            <img src="/assets/delete.png" onClick={() => props.deleteTask(index, "Tasklist")} />
                        </div>
                    </div>
                )
            })
            }
            {/* JavaScript  end*/}
        </div>
    );
}
export default TaskList;
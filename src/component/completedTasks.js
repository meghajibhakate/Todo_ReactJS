import { Component } from "react"



// Child Component name 
function CompletedTask(props) {
    // console.log("pppp---" + props)
    // return JSX
    return (
        <div className="completed-list">
            <h3 className="task-list-header">Completed Tasks</h3>
            {/* JavaScript Start */}
            {props.complete.map((compTask, index) => {
                return (

                    <div className="task-list-item" key={index}>
                        <div className="task1">

                            <img src="/assets/undo.png" onClick={() => props.undoTask(index)} />
                            <p className="task-name">{compTask}</p>
                        </div>

                        <div className="task2">
                            <img src="/assets/delete.png"  onClick={() => props.deleteTask(index,"completeTask")}/>
                        </div>

                    </div>
                )
                console.log(compTask)
            })
            }

            {/* JavaScript end */}
        </div>
    )
}
export default CompletedTask;
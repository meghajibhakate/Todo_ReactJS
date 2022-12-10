import "./App.css";
import Tasklist from "./component/taskList";
import CompletedTask from "./component/completedTasks";
import { useState } from "react";
// import Comp from "./component/practiceCode";

function App() {

    let [text, setText] = useState("");      // Input state
    const [item, setItem] = useState([]);     // Tasklist State
    const [CompTask, setCompTask] = useState([]);  //CompletedTask State


    const [inputedit, setInputedit] = useState("");  //Inputedit State






    let [clicked, setClicked] = useState("");

    const editBtn = (ElemIndex) => {
        setClicked(ElemIndex)
    }

    const tickfunct = (ElemIndex) => {

        var newArray = [...item]
        newArray[ElemIndex] = inputedit
        setItem(newArray)
        setClicked("")

    }


    const NewInputChange = (event) => {
        setInputedit(event.target.value);
        // console.log()
        console.log(event.target.value)
    };


    //Get Input value 
    const handleChange = (event) => {
        setText(event.target.value);
    };



    // Add button Click Function
    const btnClick = () => {
        setItem([...item, text]);
        setText("")
    }



    // Complete Task Function
    // function completeTask(id) {
    const completeTask = (id) => {
        var List = item.filter((text, index) => {
            return index !== id
        })
        setItem(List)

        var deleteItem = item.filter((textelem, index) => {
            return index == id
        })
        setCompTask([...CompTask, deleteItem])
    }



    //  Undo Function 
    const undoFunc = (id) => {
        var deleteItem = CompTask.filter((textelem, index) => {
            return index !== id
        })
        setCompTask(deleteItem)

        var List = CompTask.filter((text, index) => {
            return index == id
        })
        setItem([...item, [List]])

    }




    // Tasklist delete Function
    const deleteFun = (id, listtype) => {
        console.log(id)
        if (listtype == "Tasklist") {
            if (window.confirm('Delete the item?')) {
                var newList = item.filter((textelem, index) => {
                    console.log("text---" + textelem)
                    return index !== id
                })
                setItem(newList)
            }
        }
        else {
            if (window.confirm('Delete the item?')) {
                var newList = CompTask.filter((textelem, index) => {
                    console.log("text---" + textelem)
                    return index !== id
                })
                setCompTask(newList)

            }
        }
    }



    // return JSX   // HTML
    return (
        <div className="App">
            <h1 className="app-header">Welcome to your To_Do List</h1>
            <div className="container">

                <div className="add-task">
                    <input className="inputTask" type="text" placeholder="Add a new task"
                        onChange={handleChange} value={text} />
                    <button onClick={btnClick}>Add</button>
                </div>

                <div className="task-row">
                    <Tasklist
                        task={item}
                        deleteTask={deleteFun}
                        completetask={completeTask}
                        edit={editBtn}
                        tick={tickfunct}
                        clicked={clicked}
                        newInput={NewInputChange}

                    />

                    <CompletedTask
                        complete={CompTask}
                        undoTask={undoFunc}
                        deleteTask={deleteFun}
                    />

                    {/* <Comp/> */}
                </div>

            </div>
        </div>
    )
};

export default App;
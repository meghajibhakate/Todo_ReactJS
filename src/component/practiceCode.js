import { useState } from "react";

function Comp() {

  // let [text, setText] = useState("lower");
  // let [newcolor, setColor] = useState("black");


  // function btnClick() {
  //   if (text == "lower") {
  //     setText("upper")
  //     setColor("red")
  //   }
  //   else{
  //     setText("lower")
  //     setColor("black")
  //   }
  //  if (newcolor == "black") {
  //   setColor("red")
  // }


  let [clicked, setclicked] = useState(false);
  function btnClick() {
    setclicked(true)
  }


  return (
    <div>
      {/* <p style={{color: 'red'}}>{text}</p> */}
      {/* <p style={{ color: newcolor }}>{text}</p> */}


      <div>
        {
          clicked==true?
          <input placeholder="edit your task"/>
          :
          <p>This is a Para</p>

        

        }
      </div>
      <button onClick={btnClick}  >Add</button>


    </div>
  )
}
export default Comp;
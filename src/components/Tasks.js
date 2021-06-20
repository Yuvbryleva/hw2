import React from "react";
const Task = ({id, name, description, completed, onClick}) => {

  
    return (
      <div> 
         
        <div class = "Task" align="center">
        
          <div class="d1">{name}</div>
          <div>{description}</div>
          <div>{completed}</div>
          {/* <div>{id}</div> */}
          <button onClick={onClick} class="c1">Click to change status</button>
          
        </div>
        <p></p>
      </div>
    )
  }
  export default Task
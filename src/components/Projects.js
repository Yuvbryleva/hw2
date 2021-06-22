import React from "react";
import {Link} from "react-router-dom";
const Project = ({id, name, tasksIds, onClick, to, projects, tasks}) => {

  
    return (
      <div> 
         
        <div class = "Project" align="center">
          <div>{id}</div>
          <div class="p1">{name}</div>
          <div>
          <Link to = {{
            pathname: to,
            state: {projects: projects, tasks: tasks}
          }}>View tasks</Link>
</div>

          <div>{tasksIds}</div>
          {/* <button onClick={onClick} class="c1">View tasks</button> */}
          
        </div>
        <p></p>
      </div>
    )
  }
  export default Project
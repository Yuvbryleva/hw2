import React from "react";
import styles from './Tasks.module.scss'
import classnames from "classnames/bind"
import { DEFAULT_THEME, ThemeContext } from "./Context"


const cx = classnames.bind(styles)
const Task = ({id, name, description, completed, onClick}) => {

  
    return (
  <ThemeContext.Consumer>
    {theme => (
     <div> 
         
     <div className={cx("input", `input-theme-${theme}`)} align="center">
     
       <div class="d1">{name}</div>
       <div>{description}</div>
       <div>{completed}</div>
       {/* <div>{id}</div> */}
       <button onClick={onClick} class="c1">Click to change status</button>
       
     </div>
     <p></p>
   </div>
    )}
  </ThemeContext.Consumer>
      
      
    )
  }
  export default Task
import logo from './logo.svg';
import styles from './App.module.scss';
import React from "react";
import Task from './components/Tasks.js';
import Project from './components/Projects.js';
import {BrowserRouter,  Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Project_Tasks from './components/Project_tasks.js';
import classnames from "classnames/bind"
import { DEFAULT_THEME, ThemeContext } from "../src/components/Context"
import {MyInput} from './components/Import.js'

const cx = classnames.bind(styles)









class MyTodoList extends React.Component {
  

state = normState(arr.projects)

handleThemeChange = event => {
  this.setState({ theme: event.target.value})
}




  addProject = () => {

    this.setState(currentState => {
      
      var id = Math.max.apply(Math, Object.values(this.state.projectsByID).map(it => {return it.id})) +1;

      var newObj = {
        [id]: {
        name: this.state.project_name,
      id: id,
      tasksIds: []
        }
      };
      var newProject = {...currentState.projectsByID, ...newObj}

    return {
      projectsByID: newProject
    }
  })
  }

  completedChange = (id) => {
    // this.setState({ message: "Hello I am new message!" })
    console.log(id)
    var status_ = "" 
    if (this.state.tasks[id-1].completed ==="completed")
    {status_ = "not completed"}
      else
      {status_ = "completed"}
    this.setState((currentState) => {
      const newArr = [...currentState.tasks]
      newArr[id-1].completed = status_
      return {
        tasks: newArr
      }
    }

    )
  }

  
  handleChange = (event) => {
      const { value, name } = event.currentTarget
    
      this.setState({ project_name: value})
      }

  render() {
  return (

  <div>
    <div > 
    <header >

    <h1 className={cx("h1", `h1-theme-${this.context}`)} align="center">My TODO List :)</h1>

    <div> 
      <p className={cx("p", `p-theme-${this.context}`)}>Новый проект</p>
      <p className={cx("p", `p-theme-${this.context}`)}>Введите название проекта:</p>
      <input className={cx("input", `input-theme-${this.context}`)} input placeholder="type here" value={this.state.project_name} onChange={this.handleChange} name="name"></input>

      
      <div>
      <button className={cx("button", `button-theme-${this.context}`)} onClick={this.addProject} >Cоздать</button>
      </div>


    </div>
    </header>

    <div className={cx("div", `div-theme-${this.context}`)}>
    {Object.values(this.state.projectsByID).map(it => <Project className={cx("project")}  id={it.id} name={it.name} to={"/projects/" + it.id } tasksIds={it.tasksIds} projects={this.state.projectsByID} tasks={this.state.tasksById}  />)}
    </div>
    </div>
  </div>
  

  )
  }  
}


const arr = {
  projects: [{
    id: 1234,
    name: 'HSE',
    tasks: [{
      id: 1,
      name: 'RPZ',
      description: 'Project work',
      completed: 'completed'
    }, {
      id: 2,
      name: 'Ekb',
      description: 'Get ready',
      completed: 'not completed'
    }]},

    {id: 1235,
      name: 'Work',
      tasks: [{
        id: 3,
        name: 'Personalization in SFA',
        description: 'Requirements',
        completed: 'not completed'
      },
      {
        id: 4,
        name: 'Fashdan',
        description: 'Go to the shop',
        completed: 'not completed'
      }]
    }      
]  
}

const normalize = (arr) => {
  return arr.reduce((acc, it) => {
    const {id} = it
    acc[id] = {name: it.name, id: it.id, tasksIds: it.tasks.map( a => a.id)}
    return acc
  }, {}
  )
}

const norm2 = (projects) => {
  const tasksbyid = {};
  projects.forEach(element => {
      element.tasks.map (t => {tasksbyid[t.id] = t})
  });
  return tasksbyid;
}


const normState = (projects) => {
return {projectsByID : normalize(projects), tasksById: norm2(projects)}
} 



class App extends React.Component {

  state = {
    theme: DEFAULT_THEME,
  }

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }
  
    render() {
    return (
      






      

    <BrowserRouter>
    <div className={cx("container", `container-theme-${this.state.theme}`)}>
    <ThemeContext.Provider value={this.state.theme}>
    <MyTodoList ></MyTodoList>

    {/* <Switch>
    <Route exact path="/" component={MyTodoList}></Route>
    <Route path="/projects/:projectId" component={Project_Tasks}></Route>
    <Route path="/projects/:projectId" component={Project_Tasks}></Route> */}
    <Redirect to='/'></Redirect>
    {/* </Switch> */}
        <div className={cx("radios")}>
          <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={this.state.theme === "light"}
              onChange={this.handleThemeChange}
            />
            <label className={cx("label1")} htmlFor="light">Light theme</label>
          </div>
          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={this.state.theme === "dark"}
              onChange={this.handleThemeChange}
            />
            <label className={cx("label2")} htmlFor="dark">Dark theme</label>
          </div>
        </div>
        
          
        </ThemeContext.Provider>
      </div>

  <div>
    
  </div>


    </BrowserRouter>
    )

    }
}

export default App;

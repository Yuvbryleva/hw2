import logo from './logo.svg';
import './App.css';
import React from "react";
import Task from './components/Tasks.js';
import Project from './components/Projects.js';
import {BrowserRouter,  Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Project_Tasks from './components/Project_tasks.js';

const MyInput = ({ value, onChange, name, placeholder}) => {
  return <input value={value} onChange={onChange} name={name} placeholder={placeholder}/>
}




class MyTodoList extends React.Component {
  

state = normState(arr.projects)
 



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
    <div class="div1"> 
    <header class="header1">

    <h1 align="center">My TODO List :)</h1>

    <div> 
      <p>Новый проект</p>
      <p>Введите название проекта:</p>
      <MyInput input placeholder="type here" value={this.state.project_name} onChange={this.handleChange} name="name"></MyInput>

      
      <div>
      <button onClick={this.addProject} class="class2">Cоздать</button>
      </div>


    </div>
    </header>


    {Object.values(this.state.projectsByID).map(it => <Project  id={it.id} name={it.name} to={"/projects/" + it.id } tasksIds={it.tasksIds} projects={this.state.projectsByID} tasks={this.state.tasksById}  />)}

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



const App = () => {
  
    
    return (
    <BrowserRouter>
  <div>
    <Switch>
    <Route exact path="/" component={MyTodoList}></Route>
    <Route path="/projects/:projectId" component={Project_Tasks}></Route>
    {/* <Route path="/projects/:projectId" component={Project_Tasks}></Route> */}
    {/* <Redirect to='/'></Redirect> */}
    </Switch>
  </div>


    </BrowserRouter>
    )

  
}

export default App;

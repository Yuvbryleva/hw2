import logo from './logo.svg';
import './App.css';
import React from "react";
import Task from './components/Tasks.js';

const MyInput = ({ value, onChange, name, placeholder}) => {
  return <input value={value} onChange={onChange} name={name} placeholder={placeholder}/>
}




class MyTodoList extends React.Component {
  state = {
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
    },
    {
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
    },
    {
      id: 5,
      name: 'Front',
      description: 'HW2 to be done',
      completed: 'not completed'
    },
    {
      id: 6,
      name: 'Front',
      description: 'HW3 to be done',
      completed: 'not completed'
    },
    {
      id: 7,
      name: 'Front',
      description: 'HW4 to be done',
      completed: 'not completed'
    }]
  }

  

  addTask = () => {
    this.setState(currentState => {
      const newTasks = [...currentState.tasks,
        {
          id: currentState.tasks.length+1,
          name: this.state.name,
          description: this.state.description,
          completed: 'not completed'
        }]
      
    
    return {
      tasks: newTasks
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
    
      this.setState({ [name]: value})
      }
    


  render() {
  return (<div>
    <div class="div1"> 
    <header class="header1">

    <h1 align="center">My TODO List :)</h1>

    <div> 
      <p>Новая задача</p>
      <p>Введите название задачи:</p>
      <MyInput input placeholder="type here" value={this.state.name} onChange={this.handleChange} name="name"></MyInput>

      <p>Введите описание задачи:</p>
      <MyInput value={this.state.description} placeholder="type here" onChange={this.handleChange} name="description"></MyInput>
      <div>
      <button onClick={this.addTask} class="class2">Cоздать</button>
      </div>


    </div>
    </header>
    
      {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} onClick={() => {this.completedChange(it.id)}}/>)}
    </div>
  </div>)
  }  
}

const App = () => {
  return <MyTodoList />
}

export default App;

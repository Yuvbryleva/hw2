import logo from './logo.svg';
import './App.css';
import React from "react"


// const Inner = ({ name, onClick1 }) => {
//   return (
//     <div>
//       <button onClick={onClick1}>{name}</button>
//     </div>
//   )
// }

// const List = () => {
//   return (
//     <div>
//       {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed}/>)}
//     </div>
//   )
// }


const Task = ({id, name, description, completed}) => {
  const handleClick = () => {
    console.log("Task " + id + " completed status = " + completed)
  }
  
  return (
    <div> 
       
      <div class = "Task" align="center">
      
        <div class="d1">{name}</div>
        <div>{description}</div>
        <div>{completed}</div>
        <button onClick={handleClick} class="c1">Click to change status</button>
        
      </div>
      <p></p>
    </div>
  )
}

class MyTodoList extends React.Component {
  state = {
    tasks: [{
      id: 1,
      name: 'RPZ',
      description: 'Project work',
      completed: false
    }, {
      id: 2,
      name: 'Ekb',
      description: 'Get ready',
      completed: false
    },
    {
      id: 3,
      name: 'Personalization in SFA',
      description: 'Requirements',
      completed: true
    },
    {
      id: 4,
      name: 'Fashdan',
      description: 'Go to the shop',
      completed: false
    },
    {
      id: 5,
      name: 'Front',
      description: 'HW2 to be done',
      completed: true
    },
    {
      id: 6,
      name: 'Front',
      description: 'HW3 to be done',
      completed: false
    },
    {
      id: 7,
      name: 'Front',
      description: 'HW4 to be done',
      completed: false
    }]
  }


  render() {
  return (<div>
    <div class="div1"> 
    <header class="header1">

    <h1 align="center">My TODO List :)</h1>

    </header>
      {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed}/>)}
    </div>
  </div>)
  }  
}

// const Inner = ({ name, counter }) => {
//   return (
//     <div>
//       <button onClick={counter}>{name}</button>
//     </div>
//   )
// }

// class Counter extends React.Component {
//   state = {
//     count: 0,
//   }

//   ChangeStateCount = () => {
//     this.setState(state => {
//       return {
//         count: state.count +1
//       }
//     })
//   }

//   render(){
    // return (<div>
    //   <div>
    //     {this.state.count}
    //     <Inner name="Click me" counter={this.ChangeStateCount}/>
    //   </div>
    // </div>)

//   }
// }

// class Outer extends React.Component {
//   state = {
//     message: 'test',
//   }

//   changeStateMessage = () => {
//     this.setState({ message: "Hello i am new message"})
//   }

//   render() {
//     return (<div>
//       <div>
//         <Inner name = "Click ME" onClick1={this.changeStateMessage}/>
//         {this.state.message}
//       </div>
//     </div>
//     )
//   }
// }

// const Inner = ({ name1, mark }) => {
//   const greeting = 'Hello ' + name1 + mark

//   return <div>{greeting}</div>
// }

// const Outer = () => {
//   return (
//     <div>
//       <div>
//         This is my first func component!
//       </div>
//       <Inner name1="Valera" mark="!"/>
//     </div>
//   ) 
// }

const App = () => {
  return <MyTodoList />
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

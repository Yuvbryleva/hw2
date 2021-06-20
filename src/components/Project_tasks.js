import React from "react";
import Task from '../components/Tasks';

class Project_Tasks extends React.Component {
  
    render() {

        const id = this.props.match.params.projectId;
        const task_ids = this.props.location.state.projects[id].tasksIds;
        const tasks = this.props.location.state.tasks;

        console.log(task_ids);
        console.log(tasks[1].name);
        
        return (
            

            <div>
                {this.props.location.state.projects[id].name}

                {task_ids.map(it=> <Task id={it} name={tasks[it].name} description={tasks[it].description} completed={tasks[it].completed}/>)}
            </div>

        // {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} onClick={() => {this.completedChange(it.id)}}/>)}
           
      

        )
    }

}
export default Project_Tasks
import React from 'react'
import TaskService from '../services/TaskService'

class TaskComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tasks:[]
        }
    }

    componentDidMount(){
        TaskService.getTasks().then((response) => {
            this.setState({ tasks: response.data})
        });
    }

    delete(id) {
        TaskService.delete(id)
    }

    render (){
        return (
            <div>
                <h1 className="text-center"> Tâches à faire </h1>
                <table className="table table-striped">
                    <thead>
                            <tr>
                                <td><b>Id</b></td>
                                <td><b>Titre</b></td>
                                <td><b>Description</b></td>
                                <td>Options</td>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task => 
                                    <tr key = {task.id}>
                                        <td> {task.id}</td>
                                        <td> {task.titleTask}</td>   
                                        <td> {task.description}</td>
                                        <td><button onClick={this.delete(task.id)} >Supprimer</button></td>     
                                    </tr>
                                )
                            }

                        </tbody>
                </table>
            </div>
        )
    }
}

export default TaskComponent
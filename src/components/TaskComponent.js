import React from 'react'
import axios from 'axios'
import TaskService from '../services/TaskService'

const DELETE_URL = "http://localhost:9000/task/";
const UPDATE_URL = "http://localhost:9000/task/";

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
        axios.delete(DELETE_URL + id).catch(err => console.log(err));
    }

    update(id) {
        axios.update(UPDATE_URL + id).catch(err => console.log(err));
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
                                        <td>
                                            <button type="button" onClick={() => TaskService.delete(task.id)} >Supprimer</button>
                                        </td>     
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
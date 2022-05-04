import React from 'react'
import axios from 'axios'
import TaskService from '../services/TaskService'

const ADD_URL = "http://localhost:9000/task/";
const DELETE_URL = "http://localhost:9000/task/";
const UPDATE_URL = "http://localhost:9000/task/";

class TaskComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tasks:[],
            titleTask: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({titleTask: event.target.value});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value});
    }
    
    handleSubmit(event) {
        const task = {
            titleTask: this.state.titleTask,
            description: this.state.description
        }
        TaskService.add(task);
    }

    componentDidMount(){
        TaskService.getTasks().then((response) => {
            this.setState({ tasks: response.data})
        });
    }

    add(id) {
        axios.add(ADD_URL + id).catch(err => console.log(err));
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
                                        <td> {task.id} </td>
                                        <td> <input type="text" value= {task.titleTask} onChange={this.handleTitleChange.bind(this)}/></td>   
                                        <td> <input type="text" value={task.description} onChange={this.handleDescChange.bind(this)}/></td>
                                        <td>                                           
                                            <button type="button" onClick={() => TaskService.update(task.id)} >Modifier</button>
                                            <button type="button" onClick={() => TaskService.delete(task.id)} >Supprimer</button>
                                        </td>     
                                    </tr>
                                )
                            }

                        </tbody>
                </table>
                <form onSubmit={() => this.handleSubmit()}>
                    <label>
                        Titre
                        <input type="text" value={this.state.titleTask} onChange={this.handleTitleChange.bind(this)} />
                    </label>
                    <label>
                        Description
                        <input type="text" value={this.state.description} onChange={this.handleDescChange.bind(this)} />
                    </label>
                    <input type="submit" value="Ajouter" />
                </form>
            </div>
        )
    }
}

export default TaskComponent
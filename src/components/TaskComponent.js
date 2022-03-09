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
    render (){
        return (
            <div>
                <h1 className="text-center"> Tasks </h1>
                <table className="table table-striped">
                    <thead>
                            <tr>
                                <td> task Id</td>
                                <td> Titre tache</td>
                                <td> description</td>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task => 
                                    <tr key = {task.id}>
                                        <td> {task.titleTask}</td>   
                                        <td> {task.description}</td>       
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
import axios from 'axios'

const POSTS_REST_API_URL = "http://localhost:9000/tasks";
const ADD_URL = "http://localhost:9000/task/";
const DELETE_URL = "http://localhost:9000/task/";
const UPDATE_URL = "http://localhost:9000/task/";


class TaskService {

    getTasks(){
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios.get(POSTS_REST_API_URL).catch(err => console.log(err));
    }

    delete(id) {
        axios.delete(DELETE_URL + id)
        .then(response => window.location.reload())
        .catch(err => console.log(err));
    }

    update(id) {
        axios.update(UPDATE_URL + id)
        .then(response => window.location.reload())
        .catch(err => console.log(err));
    }

    add(task) {
        axios.post(ADD_URL, task)
        .then(response => window.location.reload())
        .catch(err => alert(err));
    }

}

export default new TaskService();
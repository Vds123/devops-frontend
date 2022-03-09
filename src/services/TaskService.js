import axios from 'axios'

const POSTS_REST_API_URL = "http://localhost:9000/tasks";

class TaskService {

    getTasks(){
        // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // return axios.get(POSTS_REST_API_URL).catch(err => console.log(err));
        return fetch(POSTS_REST_API_URL);
    }

}

export default new TaskService();
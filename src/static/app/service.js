import axios from 'axios'

export default class TaskService {
  getTasks() {
    return new Promise((resolve, reject) => {
      axios.get('/api/tasks').then((response) => {
        resolve(response.data)
      });
    });    
  }

  addTask(text) {
    return new Promise((resolve, reject) => {
      axios.post('/api/tasks', {task: text}).then((response) => {
        resolve()
      });
    });
  }

  deleteTask(task) {
    console.log('Removing task.')
    return new Promise((resolve, reject) => {
      axios.delete('/api/tasks/' + task).then(() => {
        resolve()
      });
    });
  }
}
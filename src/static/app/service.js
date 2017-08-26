const axios = require('axios');

class TaskService {
  getTasks() {
    return new Promise((resolve, reject) => {
      axios.get('/tasks').then((response) => {
        resolve(response.data);        
      });
    });    
  }

  addTask() {
    axios.get('/tasks')
      .then((response) => {
        this.setState({            
          taskList: response.data
        });
      });
  }

  removeTask() {

  }
}

module.exports = new TaskService();
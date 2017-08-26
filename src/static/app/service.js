const axios = require('axios');

class TaskService {
  async getTasks() {

  }

  async addTask() {
    axios.get('/tasks')
      .then((response) => {
        this.setState({            
          taskList: response.data
        });
      });
  }

  async removeTask() {

  }
}
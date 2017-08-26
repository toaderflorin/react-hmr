const ReactDOM  = require('react-dom');
const axios = require('axios');
const AddTask = require('./addTask');
const TaskList = require('./taskList');

class App extends React.Component {
  constructor() {    
    this.addTaskClick = this.addTaskClick.bind(this);
    this.componentDidMount = this.componentDidMount(this);    

    this.state = {
      taskList: ['']
    };  
  }

  componentDidMount() {
    axios.get('/tasks')
      .then((response) => {
        console.log(this.state);
        console.log(response.data);

        this.setState({            
          taskList: response.data
        });
      });
  }
  
  render() {
    return <div className="content">
      <AddTask addTaskClick={this.addTaskClick} />
      <TaskList taskList={this.state.taskList} />
    </div>
  }

  addTaskClick(text) {  
    this.state.taskList.push(text);
    this.setState({
      tasks: this.state.taskList
    });
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  ReactDOM.render(<App></App>, document.getElementById('root'));
});
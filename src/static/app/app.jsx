const service = require('./service');
const AddTask = require('./addTask');
const TaskList = require('./taskList');

class App extends React.Component {
  constructor() {
    this.addTaskClick = this.addTaskClick.bind(this);
    this.deleteTaskClick = this.deleteTaskClick.bind(this);
    this.componentDidMount = this.componentDidMount(this);

    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    service.getTasks().then(results => {
      this.setState({
        taskList: results
      });
    });
  }

  render() {
    return (
      <div className="content">
        <AddTask addTaskClick={this.addTaskClick} />
        <TaskList taskList={this.state.taskList} deleteTaskClick={this.deleteTaskClick} />
      </div>
    )
  }

  addTaskClick(text) {
    const index = this.state.taskList.indexOf(text);
    
    if (index === -1) {
      service.addTask(text)
        .then(() => service.getTasks())
        .then((results) => {
          this.setState({
            taskList: results
          });
        });
    } else {
      alert('Task already exists.');
    }
  }

  deleteTaskClick(task) {
    if (confirm('Are you sure')) {
      service.removeTask(task)
      .then(() => service.getTasks())
      .then((results) => {
        this.setState({
          taskList: results
        });
      });
    }
  }
}

module.exports = App;
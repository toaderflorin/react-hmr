const ReactDOM  = require('react-dom')
const AddTask = require('./addTask')
const TaskList = require('./taskList')

class App extends React.Component {
  constructor() {    
    this.addTaskClick = this.addTaskClick.bind(this);
    this.state = {
      taskList: []
    };
  }
  
  render() {
    return <div className="content">
      <AddTask addTaskClick={this.addTaskClick}></AddTask>
      <TaskList taskList={this.state.taskList}></TaskList>
    </div>
  }

  addTaskClick(text) {
    console.log('Got here:', text);

    this.state.taskList.push(text)
    
    this.setState({
      tasks: this.state.taskList
    });
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var el = document.getElementById("root");  
  ReactDOM.render(    
    <App></App>,
    el
  );
});

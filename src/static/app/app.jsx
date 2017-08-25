const ReactDOM  = require('react-dom')
const AddTask = require('./addTask')
const TaskList = require('./taskList')

class App extends React.Component {
  constructor() {    
    this.butClk = this.butClk.bind(this);
    this.state = {
      tasks: []
    };
  }
  
  render() {
    return <div className="content">
      <AddTask name="john" clk={this.butClk}></AddTask>
      <TaskList src={this.state.tasks}></TaskList>
    </div>
  }  

  butClk(text) {
    this.state.tasks.push(text)
    this.setState({
      tasks: this.state.tasks
    });
  }
}

module.exports = function () {
  var el = document.getElementById("root");  
  ReactDOM.render(    
    <App></App>,
    el
  );
}
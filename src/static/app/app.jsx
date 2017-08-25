const ReactDOM  = require('react-dom')
const Top = require('./top')
const TaskList = require('./taskList')

class App extends React.Component {
  constructor() {    
    this.butClk = this.butClk.bind(this);
    this.state = {
      tasks: ['task1', 'task2']
    };
  }
  
  render() {
    return <div className="content">
      <Top name="john" clk={this.butClk}></Top>
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
const Task = require('./task.jsx')

class TaskList extends React.Component {
  render() {
    var stl = {
      backgroundColor: 'yellow'
    };

    let tasks = ['John', 'Doe', 'Jane', 'Doe'];
    let taskElements = [];    
    
    for (let t of tasks) {
      taskElements.push(<Task src={t}/>)
    }

    return <div>{taskElements}</div>;
  }
}

module.exports = TaskList
const Task = require('./task')

const TaskList = ({taskList}) => {    
  let taskElements = taskList.map((task) => <Task task={task} />);
  return <div>{taskElements}</div>;
};

module.exports = TaskList
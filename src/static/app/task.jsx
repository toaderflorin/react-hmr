const service = require('./service');

const Task = ({ task, deleteTaskClick }) => {
  return (
    <div className="task">
      <button onClick={deleteTaskClick.bind(this, task)}>Delete</button>
      &nbsp;
      {task}
    </div>
  );
}

module.exports = Task;
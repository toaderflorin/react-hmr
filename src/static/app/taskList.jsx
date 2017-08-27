const Task = require('./task');

const TaskList = ({ taskList, deleteTaskClick }) => {
  const els = taskList.map((task) => {
    return <Task task={task} deleteTaskClick={deleteTaskClick} />;
  });

  return (
    <div>
      {els}
    </div>
  );
};

module.exports = TaskList;
const Task = require('./task');

const TaskList = ({taskList}) => {    
  const els = taskList.map((task) => {
    return <Task task={task} />;
  });  

  console.log(els);

  return <div>
    {els}
  </div>;
};

module.exports = TaskList;
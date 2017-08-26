const Task = ({task}) => {  
  return 
    <div className="task">
      {task}
      <button>Remove</button>
    </div>;
};
 
module.exports = Task;
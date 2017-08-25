const Task = ({src}) => {  
  return <div key={Math.random()} className="task">{src}</div>;
};
 
module.exports = Task
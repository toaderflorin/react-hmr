const Task = require('./task.jsx')

const TaskList = ({src}) => {  
      var stl = {
      backgroundColor: 'yellow'
    };
    
    let taskElements = [];      

    for (let t of src) {
      taskElements.push(<Task src={t}/>)
    }

    return <div>{taskElements}</div>;
};

module.exports = TaskList
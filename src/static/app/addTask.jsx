class AddTask extends React.Component {
  constructor() {
    this.state = {
      taskText: ''
    };

    this.addTaskClick = this.addTaskClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return <div className="top">
      Add a task
      <input type="text" value={this.state.taskText} onChange={this.handleChange} />
      <button onClick={this.addTaskClick}>Add</button>
    </div>;
  }

  handleChange(event) {        
    this.setState({
      taskText: event.target.value
    });
  }

  addTaskClick() {
    this.props.addTaskClick(this.state.taskText);
  }
}

module.exports = AddTask;
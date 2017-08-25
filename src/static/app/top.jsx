class Top extends React.Component {
  constructor() {
    this.state = {
      taskText: 'asdasd'
    };

    this.butClk = this.butClk.bind(this);
  }

  render() {
    return <div className="top">
      Add a task
      <input type="text" value={this.state.taskText} onChange={this.handleChange.bind(this)} />
      <button onClick={this.butClk}>Add</button>
    </div>;
  }

  handleChange(event) {
    console.log(event.target.value);

    this.setState({
      taskText: event.target.value
    });
  }

  butClk() {    
    this.props.clk(this.state.taskText);
  }
}

module.exports = Top
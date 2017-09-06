import axios from 'axios'

class AddTask extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    // this.componentWillMount = this.componentWillMount.bind(this)
    this.render = this.render.bind(this)
    this.setState = this.setState.bind(this)

    this.state = {
      taskText: ''
    }
  }

  render() {
    console.log(this)
    if (!this.props) {
      return <div></div>
    } else {
      return (
        <div className="top">
          <span>Add a task</span>
          <input type="text" value={this.state.taskText} onChange={this.handleChange} />
          <button onClick={this.props.addTask.bind(this, this.state.taskText)}>Add</button>
        </div>
      )
    }
  }

  handleChange(event) {
    this.setState({
      taskText: event.target.value
    })
  }
}

export default AddTask
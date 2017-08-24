class Task extends React.Component {
  render() {
    var stl = {
      backgroundColor: 'yellow',
      margin: '1px',
      padding: '5px'
    };

    return <div style={stl}>{this.props.src}</div>;
  }
}

module.exports = Task
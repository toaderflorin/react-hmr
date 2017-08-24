const ReactDOM  = require('react-dom')
const Top = require('./top')
const Bottom = require('./bottom')

class App extends React.Component {
  render() {
    return <div>
      <Top name="john"></Top>
      <Bottom></Bottom>
    </div>
  }
}

module.exports = function () {
  var el = document.getElementById("root")  
  ReactDOM.render(    
    <App></App>,
    el
  );
}
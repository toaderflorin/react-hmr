const ReactDOM  = require('react-dom')
const Greeting = require('./top')

module.exports = function () {
  var el = document.getElementById("root")
  console.log(el)
  ReactDOM.render(
    // <h1>Hello, world!</h1>,
    <Greeting name="john"></Greeting>,
    el
  );
}
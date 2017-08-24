const ReactDOM  = require('react-dom')

module.exports = function () {
  var el = document.getElementById("root")
  console.log(el)
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    el
  );
}
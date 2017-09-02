import ReactDOM from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

document.addEventListener("DOMContentLoaded", function(event) { 
  // ReactDOM.render(<App></App>, document.getElementById('root'))
  render(App);
})

if (module.hot) {
  module.hot.accept('./containers/rootContainer', () => { render(RootContainer) })
}
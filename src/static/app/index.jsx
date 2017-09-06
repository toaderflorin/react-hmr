import ReactDOM from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

document.addEventListener("DOMContentLoaded", function(event) { 
  render(App)
})

if (module.hot) {
  module.hot.accept('./app', () => { render(App) })
}
import './App.css';
import Navigation from './containers/Navigation'
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import store from './redux/store'
import cookie from 'cookie'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
            <Router />
          </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

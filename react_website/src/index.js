import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
      )
    }
  }
  
ReactDOM.render(<App />, document.getElementById('root'));
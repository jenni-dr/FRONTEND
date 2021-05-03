import React,{Component} from 'react'
import './styled.css';
import Routes from './routes';

class App extends Component {
  render(){
    return(
      <div className="app">
        <Routes/>
      </div>
    );
  }
}

export default App;

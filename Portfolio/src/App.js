import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import './app.css'
import Desktop from './components/desktop/desktop.js';
import Mobile from './components/mobile/mobile.js';

class App extends Component {

  componentDidMount(){
    M.AutoInit();
  }

  render() {
      return(
        <div className="App">
          <Mobile />  
          <Desktop />
        </div>
      )
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import LOGO from './file.png'

import './index.css'

class App extends React.Component{
  redirect(){
    window.location.href="https://uaic.azurewebsites.net/"
  }
  render(){
    return(
      <div id="static_container">
        <img src={LOGO} alt="Amazing logo" />
        <Button onClick={this.redirect}>Shorten URL'S</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));


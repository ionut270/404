import React from 'react';
import ReactDOM from 'react-dom';

import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{
  render(){
    return(
      <div id="static_container">
        <Message error>
          <Message.Header>Error</Message.Header>
          <p>You must be authentificated to use this service</p>
          <p>Click <a href="https://uaic.azurewebsites.net">here</a> to proceed to the auth page</p>
        </Message>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));


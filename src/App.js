import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoHandler from './component/videoHandler';
import Navbar from './component/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <Navbar />
        <Route path="/" component={VideoHandler} exact />
      </div>
    );
  }
}
 
export default App;
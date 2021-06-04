import React from 'react';
import { Router, Route } from 'react-router-dom';
import Main from './Main'
import Bio from './Bio'
import Pics from './Pics'
import history from '../history';
import Header from './Header';

const App = () => {
  return (<div className="ui container">
  <Router history={history}>
     <div>
       <Header />
       <Route path="/" exact component={Main}/>
       <Route path="/bio" component={Bio}/>
       <Route path="/pics" component={Pics}/>
     </div> 
  </Router>
    
    </div>);
}

export default App;

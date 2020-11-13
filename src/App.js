import { render } from '@testing-library/react';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';

const App = () => {
   render()
     return(
       <Router>
       <NavigationBar/>
       <switch>
         <Route path="/Login" component={Login}/>
         <Route path="/SignUp" component={SignUp} />
       </switch>
       </Router>
     )
   
}

export default App;

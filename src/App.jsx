import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NameForm from './NameForm';
import './index.css';
import PersonList from './PersonList';



var ReactCSSTransitionGroup = require('react-addons-css-transition-group');





//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {

    render() {
      return (
      <div>
         <Router>
         <div>
           <h2>Welcome to React Router Tutorial</h2>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <ul className="navbar-nav mr-auto">
             <li><Link to={'/'} className="nav-link"> Home </Link></li>
             <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
             <li><Link to={'/about'} className="nav-link">About</Link></li>
           </ul>
           </nav>
           <hr />
           <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/contact' component={Contact} />
               <Route path='/about' component={About} />
           </Switch>
         </div>
         </Router>
        <NameForm/>
        
        
         
      </div>
       
      )
      }
  
}

export default App;
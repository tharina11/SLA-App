import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import "./main.css"
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Services from './Service/Services';
import Navbar from './navBar/Navbar';
import Navbar2 from './navBar2/NavBar2';


function MainBody(){
  return (
   <Router>
    <Navbar/>
    <Navbar2/>
    <main className="Login-component">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default MainBody;


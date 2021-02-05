import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import './App.css';

function App() {

  useEffect(() => {
    Aos.init( {
      duration: 1500,
      easing: 'ease-in-sine' } );
  }, []);


  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

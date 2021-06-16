import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/Navbar'
import Joke from './components/Jokes'
import About from './components/pages/About'


function App() {
  return (
    <Router>

    <div className="App">
      <NavBar />
      <div className="container mx-auto">
      <Route path="/" exact component={Joke} />
      <Route path="/about" exact component={About} />

      </div>
    </div>
    </Router>
  );
}

export default App;

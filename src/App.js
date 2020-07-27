import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
import './App.css';
import RegistrationForm from './pages/RegistrationForm';
import CertificationWall from './pages/CertificationWall';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <NavBar />
          <Route path="/certificationWall" component={CertificationWall} exact />
          <Route path="/register" component={RegistrationForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;

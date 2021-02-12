import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import DatNav from './components/DatNav'
import DatFooter from './components/DatFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="defApp">
      <DatNav />
      <Container>
        <Router>
          <Route
            path="/"
            exact
            render={(props) => <HomePage {...props} />}
          />
        </Router>
      </Container>
      <DatFooter />
    </div>
  );
}

export default App;

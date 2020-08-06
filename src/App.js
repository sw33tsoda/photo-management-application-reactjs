import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import NotFound from './components/NotFound';
import { Container,Button } from 'reactstrap';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="App">
      <Container className='content'>
        <h1>PHOTO MANAGEMENT APPLICATION</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router>
            <div className="personal-navbar">
              <NavLink to="/"><Button color="danger">Main page</Button></NavLink>
              <NavLink to="/photos/add"><Button color="success">Add</Button></NavLink>
              <NavLink to="/photos/edit"><Button color="warning">Edit</Button></NavLink>
            </div>

            <Switch>
              <Redirect exact from="/" to="/photos"></Redirect>
              <Route path="/photos" component={Photo}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;

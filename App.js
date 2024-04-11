import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Map from './components/Map';
import Details from './components/Details';
import Movies from './components/Movies';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/map" component={Map} />
          <Route path="/details/:id" component={Details} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
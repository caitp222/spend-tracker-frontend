import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from '../templates/LandingPage/LandingPage';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default AppRouter;

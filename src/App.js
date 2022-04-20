import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess.js';


const App = () => {

  // Gives access to the React Router Dom via browserRouter

  return (
    <div className="App">
      <Router>
        <AppWithRouterAccess />
      </Router>
    </div>
  );

}

export default App;

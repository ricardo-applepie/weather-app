import React from 'react';
import Locations from './Components/Locations/Locations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo_Wolkig from './assets/Logo_Wolkig.png';

function App() {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar__logo'>
           <img src={Logo_Wolkig} />
        </div>
         <div>
           <h1>Weather Online </h1>
         </div>
      </div>

      <Router>
        <Switch>
          <Route exact path="/" component={Locations} />
          {/* <Route path="/details/:id" component={locationDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

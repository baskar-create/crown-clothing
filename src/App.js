import React from "react";
import HomePage from './pages/homepage.components.jsx';
import {Route} from "react-router-dom";

function HatsPage(){
  return (<div>
    <h1>Hats</h1>
  </div>);
}

function App() {
  return (
    <div >
  <Route exact={true} path='/' component={HomePage} />
  <Route exact={true} path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;

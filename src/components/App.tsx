import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/"><Home/></Route>
      </Switch>
    </div>
  );
}

export default App;

const Home = () => {
  return(
    <h1>Home</h1>
  )
}
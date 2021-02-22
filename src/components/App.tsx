import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Monsters } from '../services/ApiClient';

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
  React.useEffect(() => {
    Monsters()
    .then(x => console.log("monsters :",x))
    .catch(e => console.log("error :",e))
  })

  return(
    <h1>Home</h1>
  )
}
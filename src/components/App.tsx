import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Monsters } from '../services/ApiClient';
import { MonsterList } from '../services/types';

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
  const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList)

  React.useEffect(() => {
    Monsters()
    .then((response) => setMonstersList(response.data))
    .catch(error => console.log("error :",error))
  }, [])

  if(monstersList){
    return(
      <div className="home-page"> 
        <h1>Monsters List</h1>
        <h2>Total count: {monstersList.count}</h2>
        {monstersList.results.map((monster) => <p>{monster.name}</p>)}
      </div>
    )
  }
  else{
    return(
      <h1>Loading</h1>
    )
  }
}
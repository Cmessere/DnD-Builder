import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterList } from '../services/types';
import { Loading } from './Loading';

export const Home = () => {
  const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);

  React.useEffect(() => {
    Monsters()
      .then((response) => setMonstersList(response.data))
      .catch(error => console.log("error :", error));
  }, []);

  if (monstersList) {
    return (
      <div className="home-page">
        <h1>Monsters List</h1>
        <h2>Total count: {monstersList.count}</h2>
        {monstersList.results.map((monster) => <p>{monster.name}</p>)}
      </div>
    );
  }
  else {
    return <Loading />
  }
};

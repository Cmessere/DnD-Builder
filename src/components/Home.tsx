import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';

export const Home = () => {
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)

    React.useEffect(() => {
        Monsters()
            .then((response) => setMonstersList(response.data))
            .catch(error => setError(error));
    }, []);

    if(error){
        return <ErrorComponent error={error}/>
    }
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
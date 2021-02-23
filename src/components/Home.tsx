import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterGridProps, MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import MonsterCard from './MonsterCard';
import "./styles/Home.css" 

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
                <MonsterGrid monsters={monstersList.results.slice(0,25)} />
            </div>  
        );
    }
    else {
        return <Loading />
    }
};

const MonsterGrid = ({monsters}: MonsterGridProps) => {
    return(
        <div className="monsters-list-div">
            <div className="monsters-row">
                {monsters.slice(0, 5).map((monster) => <MonsterCard monster={monster} />)}
            </div>
            <div className="monsters-row">
                {monsters.slice(5, 10).map((monster) => <MonsterCard monster={monster} />)}
            </div>
            <div className="monsters-row">
                {monsters.slice(10, 15).map((monster) => <MonsterCard monster={monster} />)}
            </div>
            <div className="monsters-row">
                {monsters.slice(15, 20).map((monster) => <MonsterCard monster={monster} />)}
            </div>
            <div className="monsters-row">
                {monsters.slice(20, 25).map((monster) => <MonsterCard monster={monster} />)}
            </div>
        </div>   
    )
}
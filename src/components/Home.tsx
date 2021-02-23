import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterList, PageList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import { MonsterGrid } from './MonsterGrid';

function reducer(state: any, action:any){
    switch (action.type) {
        case 'increment':
            if(state.currentPage < action.maxPage)
                return {currentPage: state.currentPage + 1};
            else
                return {currentPage: state.currentPage};
        case 'decrement':
            if(state.currentPage > 0)
                return {currentPage: state.currentPage - 1};
            else
                return {currentPage: state.currentPage};
        default:
          throw new Error();
      }
}

export const Home = () => {
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)
    const  itemsPerPage = 25
    const [page, setPage] = React.useReducer(reducer, { currentPage: 0 } as unknown as PageList)

    React.useEffect(() => {
        Monsters()
            .then((response) => setMonstersList(response.data))
            .catch(error => setError(error));
    }, [page.currentPage]);

    if(error){
        return <ErrorComponent error={error}/>
    }
    if (monstersList) {
        const lowerGridRange = page.currentPage * itemsPerPage
        const upperGridRange = (page.currentPage + 1) * itemsPerPage 
        return (
            <div className="home-page">
                <h1>Monsters List</h1>
                <h2>Total count: {monstersList.count}</h2>
                <MonsterGrid monsters={monstersList.results.slice(lowerGridRange , upperGridRange)} />
                <button onClick={() => setPage({type:"decrement"})}>-</button>
                <button onClick={() => setPage({type:"increment", maxPage:monstersList.count/itemsPerPage})}>+</button>
            </div>  
        );
    }
    else {
        return <Loading />
    }
};
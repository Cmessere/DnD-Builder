import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Monsters } from '../services/ApiClient';
import { HomeParams, MonsterList } from '../services/types';
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
    const {page}:HomeParams = useParams()
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)
    const [pageState, setPage] = React.useState(page as unknown as string)
    const itemsPerPage = 25
    const history = useHistory()

    React.useEffect(() => {
        Monsters()
            .then((response) => setMonstersList(response.data))
            .catch(error => setError(error));
    }, [page, history, pageState]);

    if(error){
        return <ErrorComponent error={error}/>
    }
    if (monstersList) {
        const maxPage = Math.ceil(monstersList.count / 25)
        const lowerGridRange = (parseInt(pageState) - 1) * itemsPerPage
        const upperGridRange = (parseInt(pageState)) * itemsPerPage 
        return (
            <div className="home-page">
                <h1>Monsters List</h1>
                <h2>Total count: {monstersList.count}</h2>
                <MonsterGrid monsters={monstersList.results.slice(lowerGridRange , upperGridRange)} />
                <button onClick={() => navigate(pageState, "decrement", setPage, history)}>-</button>
                <button onClick={() => navigate(pageState, "increment", setPage, history, maxPage)}>+</button>
            </div>  
        );
    }
    else {
        return <Loading />
    }
};

const navigate = (page:string, type:string, setPage:any, history:any, maxPage?:number) =>{
    const pageNumber:number = parseInt(page)

    switch (type) {
        case 'increment':
            if(pageNumber < maxPage!){
                setPage(pageNumber+1)
                history.push("/monsters/"+`${pageNumber+1}`)
                break
            }
            else{
                setPage(pageNumber)
                history.push("/monsters/"+pageNumber)
                break
            }
        case 'decrement':
            if(pageNumber > 1){
                setPage(pageNumber-1)
                history.push("/monsters/"+`${pageNumber-1}`)
                break
            }
            else{
                setPage(pageNumber)
                history.push("/monsters/"+pageNumber)
                break
            }
        default:
          throw new Error();
      }
}
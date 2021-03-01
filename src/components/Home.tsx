import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import { MonsterGrid } from './MonsterGrid';

export const Home = () => {
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)
    const [page, setPage] = React.useState(1)
    const itemsPerPage = 25

    React.useEffect(() => {
        Monsters()
            .then((response) => setMonstersList(response.data))
            .catch(error => setError(error));
    }, [page]);

    if(error){
        return <ErrorComponent error={error}/>
    }
    if (monstersList) {
        const maxPage = Math.ceil(monstersList.count / 25)
        const lowerGridRange = (page - 1) * itemsPerPage
        const upperGridRange = (page) * itemsPerPage 
        return (
            <div className="home-page">
                <h1>Monsters List</h1>
                <h2>Total count: {monstersList.count}</h2>
                <Typography>Page: {page}</Typography>
                <MonsterGrid monsters={monstersList.results.slice(lowerGridRange , upperGridRange)} />
                <Pagination color="primary"
                 count={maxPage} page={page}
                 onChange={(_event,page) => handleChange(page, setPage)}
                 showFirstButton showLastButton
                />
            </div>  
        );
    }
    else {
        return <Loading />
    }
};

function handleChange(page:number, setPage:React.Dispatch<React.SetStateAction<number>>){
    setPage(page)
}
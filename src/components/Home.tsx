import { makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { title } from 'process';
import React from 'react';
import { Monsters } from '../services/ApiClient';
import { MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import { MonsterGrid } from './MonsterGrid';
import "./styles/Home.css"

const useStyles = makeStyles({
    typography: {
        display: "flex",
        margin: "auto",
        color: "#cb2d3e"
    }
  });

export const Home = () => {
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)
    const [page, setPage] = React.useState(1)
    const itemsPerPage = 25
    const classes = useStyles();

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
                <div className="home-page-title-div">
                    <Typography className={classes.typography} variant="h2" gutterBottom>Monsters List</Typography>
                    <Typography className={classes.typography} variant="h4" gutterBottom>Total count: {monstersList.count}</Typography>
                </div>
                <MonsterGrid monsters={monstersList.results.slice(lowerGridRange , upperGridRange)} />
                <div className="pagination-div">
                    <Pagination color="primary"
                    count={maxPage} page={page}
                    onChange={(_event,page) => handleChange(page, setPage)}
                    showFirstButton showLastButton
                    />
                 </div>
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
import { TextField } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Monsters } from '../services/ApiClient';
import { Monster, MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import { MonsterGrid } from './MonsterGrid';
import "./styles/Home.css"

const useStyles = makeStyles({
    typography: {
        display: "flex",
        margin: "auto",
        color: "#cb2d3e"
    },
    option: {
        color: "#cb2d3e"
    }
  });


export const Home = () => {
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [error, setError] = React.useState(undefined)
    const [page, setPage] = React.useState(1)
    const itemsPerPage = 25
    const classes = useStyles();
    const history = useHistory()

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
                <Autocomplete
                    id="monsters-box"
                    options={monstersList.results}
                    classes={{option: classes.option}}
                    getOptionLabel={(option:Monster) => option.name}
                    style={{ width: 300, justifyContent: "center", margin: "auto", marginTop: "1vh", marginBottom: "1vh", color:"#cb2d3e" }}
                    renderInput={(params) => <TextField {...params} style={{color:"#cb2d3e"}} variant="outlined" />}
                    onChange={(_event, option) => {navigateToSelection(option, history)}}
                />
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

const handleChange = (page:number, setPage:React.Dispatch<React.SetStateAction<number>>) =>{
    setPage(page)
}

const navigateToSelection = (option:any, history:any) =>{
    history.push("/monsters/detail/"+option.index)
}
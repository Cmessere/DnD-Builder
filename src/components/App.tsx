import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Detail } from './Detail';
import { Home } from './Home';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../services/theme';

function App() {
    return (
        <div >
            <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/monsters/detail/:id"><Detail /></Route>
                <Route path="/encounter"><Encounter /></Route>
            </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;

const Encounter = () =>{
    return(
        <div>Encounter builder</div>
    )
}
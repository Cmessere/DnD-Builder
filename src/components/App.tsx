import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Detail } from './Detail';
import { Home } from './Home';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../services/theme';
import { Encounter } from './Encounter';

function App() {
    return (
        <div >
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/monsters/detail/:id"><Detail /></Route>
                    <Route path="/encounter/:type?"><Encounter /></Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;


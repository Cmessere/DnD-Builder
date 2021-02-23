import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';

function App() {
    return (
        <div >
            <Switch>
                <Route exact path="/"><Home /></Route>
            </Switch>
        </div>
    );
}

export default App;
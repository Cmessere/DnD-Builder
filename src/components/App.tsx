import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Detail } from './Detail';
import { Home } from './Home';

function App() {
    return (
        <div >
            <Switch>
                <Route exact path="/monsters"><Home /></Route>
                <Route path="/monsters/detail/:id"><Detail /></Route>
            </Switch>
        </div>
    );
}

export default App;
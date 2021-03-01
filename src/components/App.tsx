import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Detail } from './Detail';
import { Home } from './Home';

function App() {
    let history = useHistory()
    React.useEffect(()=>{
        history.push("/monsters/1")
    },[])

    return (
        <div >
            <Switch>
                <Route exact path="/monsters/:page"><Home /></Route>
                <Route path="/monsters/detail/:id"><Detail /></Route>
            </Switch>
        </div>
    );
}

export default App;
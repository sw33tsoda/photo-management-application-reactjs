import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEditPage';
import MainPage from './pages/MainPage';

Photo.propTypes = {};

export default function Photo(props) {
    const match = useRouteMatch();
    console.log({match});

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />

            <Route path={`${match.url}/add`} exact component={AddEditPage} />
            <Route path={`${match.url}/edit`} exact component={() => <h1>Edit a photo</h1>} />
            
            <Route component={NotFound}></Route>
        </Switch>
    );
}
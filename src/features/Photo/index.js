import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEditPage';
import MainPage from './pages/MainPage';

Photo.propTypes = {};

export default function Photo(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />

            <Route path={`${match.url}/add`} exact component={AddEditPage} />
            <Route path={`${match.url}/edit/:photo_id`} exact component={AddEditPage} />
            
            <Route component={NotFound}></Route>
        </Switch>
    );
}
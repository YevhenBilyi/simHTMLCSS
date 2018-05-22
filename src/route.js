import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Room from './Room/Room';

export default(
    <Switch>

    <Route component={Room} path='/:id'/>
    </Switch>
)
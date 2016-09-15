import React from 'react';
import { render } from 'react-dom';
import { autorun } from 'mobx';

import App from './components/App';

import { appState, appStateInstance , extendedAppState as state} from './model/AppState';
import Users from './service/Users';

const users = Users(state);

autorun(() => {
    console.log("Total number of users: " + state.numberOfUsers);
});

autorun(() => {
    console.log("males: " + state.males.length);
    console.log("females: " + state.females.length);
});

autorun(() => {
    users.list(state.query);
});

render(
    <App
        state={state}
        users={users}></App>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { autorun } from 'mobx';

import App from './components/App';

import { appStateInstance as state } from './model/AppState';
import Users from './service/Users';

const users = Users(state);

autorun(() => {
    users.list(state.query);
});

autorun(() => {
    console.log("males: " + state.males.length);
    console.log("females: " + state.females.length);
});

autorun(() => {
    console.log("Total number of users: " + state.numberOfUsers);
});

render(
    <App
        state={state}
        onRemove={(index) => users.remove(index)}></App>,
    document.getElementById('root')
);

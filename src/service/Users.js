//const URL = "https://randomuser.me/api";
const URL = "http://localhost:3000";

const _list = (query) => {
    return fetch(`${URL}/?results=20&seed=${query}`).then((res) => {
        return res.json();
    }).then((data) => {
        return data.results;
    });
};

export default (appState) => {

    const list = (query) => {
        appState.loading = true;
        _list(query).then((users) => {
            appState.users = users;
            appState.loading = false;
        }).catch(() => {
            appState.loading = false;
        });
    };

    const remove = (index) => {
        appState.users.splice(index,1);
    };

    return {
        list,
        remove
    }
};
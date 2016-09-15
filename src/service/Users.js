const _list = (query) => {
    return fetch('https://randomuser.me/api/?results=20&seed=' + query).then((res) => {
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
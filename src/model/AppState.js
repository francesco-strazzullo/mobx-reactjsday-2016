import { observable, computed, extendObservable } from 'mobx';

//Classes and decorators

class AppState {
    @observable query = "";
    @observable loading = false;
    @observable users = [];

    @computed get numberOfUsers() {
        return this.users.length;
    }

    @computed get males() {
        return this.users.filter(user => user.gender === 'male');
    }

    @computed get females() {
        return this.users.filter(user => user.gender !== 'male');
    }
}

export const appStateInstance = new AppState();

//ES 5

export const appState = observable({
    query:"",
    loading: false,
    users:[],
    get numberOfUsers() {
        return this.users.length;
    },
    get males() {
        return this.users.filter(user => user.gender === 'male');
    },
    get females() {
        return this.users.filter(user => user.gender !== 'male');
    }
});
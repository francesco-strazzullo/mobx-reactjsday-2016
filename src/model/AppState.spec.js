import {assert} from 'chai';
import {appState as state} from "./AppState";

describe('AppState', function () {
    it('should calculate the length of the users in a getter', function () {
        state.users = [1,2,3];
        assert.equal(state.users.length,state.numberOfUsers);
    });

    it('should sync users and numberOfUsers', function () {
        state.users = [
            {
                name:'Francesco',
                gender:'male'
            },
            {
                name:'Lucia',
                gender:'female'
            }
        ];

        assert.deepEqual(state.males,[state.users[0]]);
        assert.deepEqual(state.females,[state.users[1]]);
    });
});
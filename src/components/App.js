import React from 'react';
import { observer } from 'mobx-react';

export default observer(({state,onRemove}) => {

        const loading = state.loading ? <span>Loading</span> : null;

        var getUsers = () => {
            if(!state.numberOfUsers){
                return null;
            }

            return (
                <ul>
                    {state.users.map((user,index) => (
                        <li key={index}>
                            <img src={user.picture.thumbnail} width="50"/>
                            <span>{user.name.first} {user.name.last}</span>
                            <button onClick={() => onRemove(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            );
        };

        return (
            <div>
                <h1>MobX Example</h1>
                {loading}
                <div>
                    <input type="text" onChange={(e) => state.query = e.target.value}/>
                    Total Users: {state.numberOfUsers} ({state.males.length} males and {state.females.length} females)
                </div>
                {getUsers()}
            </div>
        );
    }
);
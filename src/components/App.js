import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {

    render(){

        const loading = this.props.state.loading ? <span>Loading</span> : null;

        var getUsers = () => {
            if(!this.props.state.numberOfUsers){
                return null;
            }

            return (
                <ul>
                    {this.props.state.users.map((user,index) => (
                        <li key={index}>
                            <img src={user.picture.thumbnail} width="50"/>
                            <span>{user.name.first} {user.name.last}</span>
                            <button onClick={() => this.props.users.remove(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            );
        };

        return (
            <div>
                <h1>MobX Example</h1>
                {loading}
                <input type="text" onChange={(e) => this.props.state.query = e.target.value}/>
                {getUsers()}
                <div>
                    Total Users: {this.props.state.numberOfUsers}
                </div>
            </div>
        );
    }
}
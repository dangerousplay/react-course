import React, {Component} from 'react';
import './App.css';
import UserOutput from "./components/User/UserOutput";
import UserInput from "./components/User/UserInput";

class App extends Component {
    state = {
            persons: [
                {
                    name: 'Max',
                    age: 28,
                    id: 1
                },
                {
                    name: 'Menu',
                    age: 29,
                    id: 2
                },
                {
                    name: 'Mat',
                    age: 30,
                    id: 3
                }
            ]
        };

    nameChangeHandler(event, user){
        const st = this.state;

        const index = st.persons.indexOf(user);

        st.persons[index].name = event.target.value;

        this.setState(st);
    }

    render() {
        return (
            <div className="App">
                {this.state.persons.map(e =>
                 <div key={e.id}>
                     <UserOutput key={e.id} name={e.name} age={e.age}><UserInput user={e} change={this.nameChangeHandler.bind(this)}/></UserOutput>
                 </div>
                )}
            </div>
        );
    }
}

export default App;

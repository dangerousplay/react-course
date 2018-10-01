import React from 'react'
import './Person.css'

class UserOutput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Person">
                <p>Hello, my name is {this.props.name} and i'm {this.props.age} years old.</p>
                <p>How do you do?</p>
                {this.props.children}
            </div>
        );
    }
}

UserOutput.propTypes = {};

export default UserOutput;
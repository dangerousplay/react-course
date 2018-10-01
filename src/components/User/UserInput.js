import React from 'react'

class UserInput extends React.Component {
    constructor(props) {
        super(props);
    }

    style = {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box'
    };

    render() {
        return (
            <div>
                <input type="text" style={this.style} onChange={e => this.props.change(e, this.props.user)}/>
            </div>
        );
    }
}

UserInput.propTypes = {};

export default UserInput;
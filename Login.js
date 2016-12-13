import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.props.children);
    }
    render() {
        console.log('=======2=======');
        return (
            <div>
                <h3>{this.props.user}</h3>
                <a onClick={this.handleClick}>Click me2</a>
            </div>
        )
    }
}

export default Login;

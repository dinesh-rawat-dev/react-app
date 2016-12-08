import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.props.children);
    }
    render() {
        return (
            <div>
                <h3>{this.props.user}</h3>
                <a onClick={this.handleClick}>Click me</a>
            </div>
        )
    }
}

export default App;

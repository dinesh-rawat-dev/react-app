import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3> {this.props.user} </h3>
                <p> {this.props.children} </p>
            </div>
        )
    }
}

export default App;

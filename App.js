import React from 'react';

class App extends React.Component {
    render() {
        return <div> {this.props.user} loves eating {this.props.food} </div>
    }
}

export default App;

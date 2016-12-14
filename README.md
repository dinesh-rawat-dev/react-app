# Learning reactjs - Children

[![N|Solid](http://img.crx4chrome.com/4f/46/55/jaaklebbenondhkanegppccanebkdjlh-icon.png)](https://facebook.github.io/react/)

React created interactive UIs. It creates encapsulated views for the react application that manages their own state.

### Events
Till now, we worked with render some HTML on the page. We start react to create dynamic or changing components to which the user can interact. Lets do something interactive. Ex:

```sh
ReactDom.render(
    <div>
        <App user='Dinesh'>This guy is awesome!</App>
    </div>,
    document.getElementById('mainContent')
);
```
### Clicking on an anchor tag

```sh
import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        // necessary to make `this` work in the callback
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
```
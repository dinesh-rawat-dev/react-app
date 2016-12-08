# Learning reactjs - Multiple Components and Properties

[![N|Solid](http://img.crx4chrome.com/4f/46/55/jaaklebbenondhkanegppccanebkdjlh-icon.png)](https://facebook.github.io/react/)

React created interactive UIs. It creates encapsulated views for the react application that manages their own state.

### Passing multiple components to ReactDom.render method
render() method accepts only one component at a time as shown in the below example:

```sh
ReactDom.render(
    <App />,
    document.getElementById('mainContent')
);
```

But if you want to do it as follows:
```sh
ReactDom.render(
    <App />
    <App />
    <App />,
    document.getElementById('mainContent')
);
```

The above code will produce error.
However, if you want to pass multiple, you can do it by wrapping the multi components inside an HTML element, as follows:

```sh
ReactDom.render(
    <div>
        <App />
        <App />
        <App />
    </div>,
    document.getElementById('mainContent')
);
```
### Passing values along with component

```sh
ReactDom.render(
    <div>
        <App user='dinesh' food='Lime Pickle'/>
        <App user='Abner' food='Mango Lassi'/>
        <App user='Addison' food='Medu Vada'/>
    </div>,
    document.getElementById('mainContent')
);
```
### Accessing passing parameters along with components
```sh
{this.props.user}
{this.props.food}
```

{} braces are used to access the properties.

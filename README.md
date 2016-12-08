# Learning reactjs - Children

[![N|Solid](http://img.crx4chrome.com/4f/46/55/jaaklebbenondhkanegppccanebkdjlh-icon.png)](https://facebook.github.io/react/)

React created interactive UIs. It creates encapsulated views for the react application that manages their own state.

### Children
Anything, that is wrapped inside an opening and closing tag is a children.

```sh
<App user='Dinesh'> This is a child </App>
```
`This is a child` is  children of App component.

### Accessing passing parameters along with components
```sh
{this.props.user}
{this.props.children}
```

{} braces are used to access the properties.

import React from 'react';

require('./App.css');

export default React.createClass({
  render () {
    return (
      <div>
        <p>I am p tag</p>
        <div> { this.props.children } </div>
      </div>
    )
  }
})

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/

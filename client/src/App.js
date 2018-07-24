import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('/v1/user/all')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }
  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Lol
        </p>
        <ul>
            {users.map(user =>
              <li key={user.userid}>
                <span>{user.username}</span>
              </li>
            )}
          </ul>
      </div>
    );
  }
}

export default App;

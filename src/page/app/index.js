import React, { Component } from 'react';
import Ajax from '../../tool/ajax';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '123'};
  }

  componentDidMount() {
    Ajax('xhr/index.json').then(res => {
      this.setState({
        title: res.data.title
      });
    })
  }

  render() {
    return (
      <div className='m-app'>{this.state.title}</div>
    );
  }
}

export default App;
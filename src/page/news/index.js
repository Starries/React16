import React, { Component } from 'react';
import Ajax from '../../tool/ajax';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '123'};
  }

  componentDidMount() {
    Ajax('news/index.json').then(res => {
      this.setState({
        title: res.data.title
      });
    })
  }

  render() {
    return (
      <div className='m-news'>{this.state.title}</div>
    );
  }
}

export default News;
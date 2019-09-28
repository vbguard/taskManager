import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchTasks extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <input type="text" value={this.state.text} onChange={this.handleChange} name="search" />;
  }
}

const mSTP = state => ({});

const mDTP = dispatch => ({});

export default connect(
  mSTP,
  mDTP
)(SearchTasks);

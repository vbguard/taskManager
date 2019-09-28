import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTasks } from '../../redux/actions/tasksActions';
import styles from './SearchTasks.module.css';


class SearchTasks extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name="search"
        />
      </form>
    );
  }
}

const mSTP = state => ({});

const mDTP = dispatch => ({
  onSubmit: search => dispatch(searchTasks(search))
});

export default connect(
  mSTP,
  mDTP
)(SearchTasks);

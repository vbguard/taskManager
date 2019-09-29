import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDate } from '../../redux/selectors/selectors';

class sortTask extends Component {
  state = {};

  componentDidMount() {
    const { dates } = this.props;
    console.log(dates);
  }

  render() {
    return  <h1>gg</h1>;
  }
}
const MSTP = state => ({ dates:state.userTasks });

export default connect(MSTP)(sortTask);

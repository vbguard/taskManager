import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDate } from '../../redux/selectors/selectors';

class sortTask extends Component {
  state = {};

  componentDidMount() {
    const { date } = this.props;
    console.log(date);
  }

  render() {
    return <h1>gg</h1>;
  }
}
const MSTP = state => ({ dates: getDate(state) });

export default connect(MSTP)(sortTask);

import React, { Component } from 'react';
import styles from '../../pages/CalendarPage/calendarPage.module.css';
import InfiniteCalendar from 'react-infinite-calendar';
import windowSize from 'react-window-size';

class Calendar extends Component {
  state = {};

  forMobile = () => {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <InfiniteCalendar
        width={289}
        height={340}
        selected={today}
        minDate={lastWeek}
        displayOptions={{
          layout: 'portrait',
          showHeader: false
        }}
        locale={{
          weekStartsOn: 1
        }}
        theme={{
          selectionColor: '#284060',
          textColor: {
            default: '#333',
            active: '#FFF'
          },
          weekdayColor: '#284060'
        }}
      />
    );
  };

  forTablet = () => {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <InfiniteCalendar
        width={394}
        height={500}
        selected={today}
        minDate={lastWeek}
        displayOptions={{
          layout: 'portrait',
          showHeader: false
        }}
        locale={{
          weekStartsOn: 1
        }}
        theme={{
          selectionColor: '#284060',
          textColor: {
            default: '#333',
            active: '#FFF'
          },
          weekdayColor: '#284060'
        }}
      />
    );
  };

  render() {
    const { windowWidth } = this.props;

    return <div className={styles.calendarContainer}>{windowWidth < 768 ? this.forMobile() : this.forTablet()}</div>;
  }
}

export default windowSize(Calendar);

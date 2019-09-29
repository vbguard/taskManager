import React, { Component } from 'react';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from 'react-infinite-calendar';
import { format } from 'date-fns';
import 'react-infinite-calendar/styles.css';
import Icon from '../Icon/Icon';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.dates || []
    };
  }

  handlerOnSelect = event => {
    const dateString = format(event, 'dd-mm-yyyy');
    if (this.state.selected.includes(dateString)) {
      const filtered = this.state.selected.filter(el => el !== dateString);
      return this.setState({ selected: filtered });
    }

    return this.setState({ selected: [...this.state.selected, dateString] });
  };

  handleCloseDatePicker = e => {
    e.preventDefault();
    this.props.handleOpenDatePicker(this.state.selected);
  };

  render() {
    const { isToggleOn } = this.props;
    const { selected } = this.state;
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const MultipleDatesCalendar = withMultipleDates(Calendar);

    return (
      <>
        {isToggleOn && (
          <div>
            <button type="button" onClick={this.handleCloseDatePicker}>
              <Icon icon="Clear" />
            </button>
            <InfiniteCalendar
              width={400}
              height={300}
              Component={MultipleDatesCalendar}
              interpolateSelection={defaultMultipleDateInterpolation}
              selected={selected}
              onSelect={this.handlerOnSelect}
              disabledDays={[0, 6]}
              minDate={lastWeek}
            />
          </div>
        )}
      </>
    );
  }
}

export default DatePicker;

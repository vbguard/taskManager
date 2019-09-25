import React, { Component } from "react";
import styles from "./calendar.module.css";
import { compareAsc, format } from "date-fns";
import Icon from "../../components/Icon/Icon";

class Calendar extends Component {
	state = {
		currentMonth: new Date(),
		selectedDate: new Date()
	};

	renderHeader() {
		const dateFormat = "MMMM yyyy";
		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className={styles.icon} onClick={this.prevMonth}>
						<Icon icon="Back" />
					</div>
				</div>
				<div className="col col-center">
					<span>{format(this.state.currentMonth, dateFormat)}</span>
				</div>
				<div className="col col-end" onClick={this.nextMonth}>
					<div className={styles.icon}>
						<Icon icon="Next" />
					</div>
				</div>
			</div>
		);
	}
	renderDays() {}
	renderCells() {}

	onDateClick = day => {};
	nextMonth = () => {};
	prevMonth = () => {};

	render() {
		return (
			<div className={styles.calendarContainer}>
				<h2>Calendar</h2>
				{this.renderHeader()}
			</div>
		);
	}
}

export default Calendar;

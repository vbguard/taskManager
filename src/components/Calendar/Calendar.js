import React, { Component } from "react";
import styles from "./calendar.module.css";
import { compareAsc, addMonths, subMonths, format } from "date-fns";
import Icon from "../../components/Icon/Icon";

class Calendar extends Component {
	state = {
		currentMonth: new Date(),
		selectedDate: new Date()
	};

	renderHeader() {
		const dateFormat = "MMMM yyyy";
		return (
			<div className={`${styles.header} ${styles.row} ${styles.flexMiddle}`}>
				<div className={`${styles.col} ${styles.colStart}`}>
					<button
						type="button"
						className={styles.iconBtn}
						onClick={this.prevMonth}
					>
						<Icon icon="Back" className={styles.icon} />
					</button>
				</div>
				<div className={`${styles.col} ${styles.colCenter}`}>
					<span>{format(this.state.currentMonth, dateFormat)}</span>
				</div>
				<div
					className={`${styles.col} ${styles.colEnd}`}
					onClick={this.nextMonth}
				>
					<button type="button" className={styles.iconBtn}>
						<Icon icon="Next" className={styles.icon} />
					</button>
				</div>
			</div>
		);
	}

	nextMonth = () => {
		this.setState({
			currentMonth: addMonths(this.state.currentMonth, 1)
		});
	};
	prevMonth = () => {
		this.setState({
			currentMonth: subMonths(this.state.currentMonth, 1)
		});
	};

	renderDays() {}
	renderCells() {}

	onDateClick = day => {};

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

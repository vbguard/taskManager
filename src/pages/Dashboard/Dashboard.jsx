import React, { Component } from "react";
import PropTypes from "prop-types";
import windowSize from "react-window-size";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./Dashboard.module.css";
import { loginSuccess } from "../../redux/actions/authActions";
import { openModal } from "../../redux/actions/modalAction.js";
import { Switch, Route } from "react-router-dom";
import { getUserTasks } from "../../redux/actions/tasksActions";
import { getToken, getLoader, getModal } from "../../redux/selectors/selectors";
import InfoPop from "../../components/InfoPop/InfoPop";
import Icon from "../../components/Icon/Icon";
import Calendar from "../../components/Calendar/Calendar";

<<<<<<< HEAD
import TaskList from '../../components/TaskList/TaskList';
=======
import Task from "../../components/Task/Task.jsx";

const task = {
	taskNumber: 1,
	taskHeader: "Подготовка документации",
	taskDescription:
		"Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться",
	isLoop: false,
	loopDates: [10, 17, 21],
	isComplete: true,
	onEdit: () => {},
	onCompltete: () => {}
};
>>>>>>> develop

export const DashboardContext = React.createContext({});

const Header = () => (
	<div>
		<h1>Header</h1>
	</div>
);

const AddForm = () => (
	<div>
		<h1>AddForm</h1>
	</div>
);

const Tasks = () => (
<<<<<<< HEAD
  <div>
    <h1>Tasks</h1>
    <TaskList />
  </div>
=======
	<div>
		<h1>Tasks</h1>
		<Task task={task} />
	</div>
>>>>>>> develop
);

class Dashboard extends Component {
	state = {};

	static propTypes = {
		loader: PropTypes.bool.isRequired,
		modal: PropTypes.bool.isRequired,
		token: PropTypes.string.isRequired,
		windowWidth: PropTypes.number.isRequired,
		loginSuccess: PropTypes.func.isRequired,
		getUserTasks: PropTypes.func.isRequired,
		openModal: PropTypes.func.isRequired
	};

	componentDidMount() {
		const { token, getUserTasks } = this.props;
		getUserTasks(token);
	}

	render() {
		const { windowWidth, loader, modal, openModal } = this.props;

		return (
			<>
				<Header />
				{windowWidth < 768 && (
					<>
						<div className={styles.iconsContainer}>
							<button
								type="button"
								className={styles.calendarBtnIcon}
								onClick={() => alert("Появляется pop up с Календарём!")}
							>
								<Icon icon="Calendar" className={styles.btnCalendarIcon} />
							</button>
							<Icon icon="Info" onClick={openModal} />
						</div>

						<Switch>
							<Route path="/dashboard" exact component={Tasks} />
							<Route path="/dashboard/add" component={AddForm} />
						</Switch>
						<button className={styles.btnAdd}>+</button>
					</>
				)}
				{(loader && (
					<Loader
						type="Oval"
						color="#284060"
						height={35}
						width={35}
						timeout={3000}
					/>
				)) || (
					<>
						{windowWidth >= 768 && windowWidth < 1024 && (
							<>
								<Icon icon="Info" onClick={openModal} />
								<Switch>
									<Route path="/dashboard" exact component={Tasks} />
									<Route path="/dashboard/add" component={AddForm} />
								</Switch>

								<button className={styles.btnAdd}>+</button>

								<button
									className={styles.btnCalendar}
									onClick={() => alert("Появляется pop up с Календарём!")}
								>
									<Icon icon="Calendar" className={styles.calendarSVG} />
									<span className={styles.btnCalendarText}>
										Перейти в календарь
									</span>
								</button>
							</>
						)}
						{windowWidth >= 1024 && (
							<div className={styles.wrapper}>
								<div className={styles.tasksWrapper}>
									<button className={styles.btnAdd}>+</button>
									<Tasks />
								</div>

								<div className={styles.calendarWrapper}>
									<Calendar />
								</div>
							</div>
						)}
					</>
				)}
				{modal && <InfoPop />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	token: getToken(state),
	loader: getLoader(state),
	modal: getModal(state)
});

const mapDispatchToProps = dispatch => ({
	loginSuccess: session => dispatch(loginSuccess(session)),
	getUserTasks: token => dispatch(getUserTasks(token)),
	openModal: () => dispatch(openModal())
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	windowSize
)(Dashboard);

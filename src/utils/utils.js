// Тут пишем функции хелперы, это файл для экспорта тут ничего не должно исполняться
import { format } from 'date-fns';

export const datesFromTasks = tasks => {
  let result = {};
  result.isCompleted = [];
  result.isDisabled = [];
  if (Array.isArray(tasks)) {
    tasks.map(task => {
      if (Array.isArray(task.dates)) {
        task.dates.map(date => {
          if (date.isComplete) {
            result.isDisabled.push(new Date(date.date).toLocaleDateString());
          } else {
            result.isCompleted.push(new Date(date.date).toLocaleDateString());
          }
        });
      }
    });
  }
  return result;
};

export const addTaskToCalendar = (task, calendar) => {
  const { _id, title } = task;
  const isRepeat = task.dates.length > 1;

  if (isRepeat) {
    for (let i = 0; i < task.dates.length; i++) {
      const taskDate = format(new Date(task.dates[i].date), 'dd-MM-yyyy');

      calendar.map(el => {
        if (el.date === taskDate) {
          el.repeatTasks.tasks.push({ _id, title, isRepeat });
          el.repeatTasks.count = el.repeatTasks.tasks.length;
          return el;
        }
        return el;
      });

      if (!calendar.some(el => el.date === taskDate)) {
        calendar.push({
          date: taskDate,
          repeatTasks: { tasks: [{ _id, title, isRepeat }], count: 1 },
          oneTasks: { tasks: [], count: 0 }
        });
      }
    }
  }

  if (!isRepeat) {
    const taskDate = format(new Date(task.dates[0].date), 'dd-MM-yyyy');

    calendar.map(el => {
      if (el.date === taskDate) {
        el.oneTasks.tasks.push({ _id, title, isRepeat });
        el.oneTasks.count = el.oneTasks.tasks.length;
        return el;
      }
      return el;
    });

    if (!calendar.some(el => el.date === taskDate)) {
      calendar.push({
        date: taskDate,
        oneTasks: { tasks: [{ _id, title, isRepeat }], count: 1 },
        repeatTasks: { tasks: [], count: 0 }
      });
    }
  }

  return calendar;
};

// convert daye from format RFC2822 (Fri Apr 05 2019 16:59:00 GMT-0700 (Pacific Daylight Time)) into 2019-04-05
export const convertDateFromRFC2822 = dateRFC2822 => {
  let date = JSON.stringify(dateRFC2822);
  let result = date.slice(1, 11);
  return result;
};

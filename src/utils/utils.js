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
  // console.log('task', task);
  // console.log('calendar', calendar);
  // console.log(format(new Date(task.dates[0].date), 'dd-MM-yyyy'));
  const { _id, title } = task;
  const isRepeat = task.dates.length > 1;

  if (isRepeat) {
    for (let i = 0; i < task.dates.length; i++) {
      const taskDate = format(new Date(task.dates[i].date), 'dd-MM-yyyy');

      calendar.map(el => {
        if (el.date === taskDate) {
          return el.repeatTasks.tasks.push({ _id, title, isRepeat });
        }
        return el;
      });
    }
  } else {
  }

  console.log(calendar);
  // for (let i = 0; i < task.dates.length; i++) {
  //   const newTask = {
  //     date: format(new Date(task.dates[i].date), 'dd-MM-yyyy'),
  //     oneTasks: { tasks: [], count: this.tasks.length },
  //     repeatTasks: { tasks: [], count: this.tasks.length }
  //   };

  //   if (task.dates.length === 1) {
  //     newTask.oneTasks.tasks.push({_id: task._id, title: task.title, isRepeat: false});
  //   }

  //   if(task.dates.length > 1) {
  //     newTask.repeatTasks.tasks.push({_id: task._id, title: task.title, isRepeat: false});
  //   }
  // }
};

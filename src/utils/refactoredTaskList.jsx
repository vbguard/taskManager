
import { format } from 'date-fns';

export const refactoredTaskList = (tasks) => {
    let allDates = [];
    let allDatesWithIds = [];
    if (Array.isArray(tasks)) {
        // console.log('tasks=', tasks);
        tasks.map(task =>{
        // console.log('task=', task);    
        if (Array.isArray(task.dates)){
            // console.log('task.dates=', task.dates);
            task.dates.map(date =>{
                // console.log('date=', date);
                allDatesWithIds.push({dateAsNumber:new Date(date.date).getTime(), date: format(new Date(date.date), 'yyyy-MM-dd'), taskId: task._id});
                allDates.push(new Date(date.date).getTime());
            })
        }
    })
    }
    // console.log('allDates=', allDates);
    // console.log('allDatesWithIds=', allDatesWithIds);
    // const sortedAllDates = allDates.sort((a, b) => a - b);
    const sortedAllDates = allDates.sort((a, b) => a - b);
    // const sortedallDatesWithIds = allDatesWithIds.sort((a, b) => a.date - b.date);
    const sortedallDatesWithIds = allDatesWithIds.sort((a, b) => a.dateAsNumber - b.dateAsNumber);
    // console.log('sortedAllDates=', sortedAllDates);
    // console.log('sortedallDatesWithIds=', sortedallDatesWithIds);
    // let datesForTasksList=[];
    let now = new Date();
    // console.log('now=', now);
    // console.log('typeof now=', typeof now);
    now = now.toISOString();
    // console.log('nowISO=', now);
    // console.log('typeof nowISO=', typeof now);
    now = new Date(now);
    // console.log('now=', now);
    // console.log('typeof now=', typeof now);
    now = format(now, 'yyyy-MM-dd');
    // console.log('now  only day =', now);
    // console.log('typeof only day  now=', typeof now);
    now = Date.parse(now);
    // console.log('now parsed only day iso=', now);
    // console.log('typeof parsed only day iso=', typeof now);
    function unique(arrOfDates) {
        let result = [];
        for (let str of arrOfDates) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
        return result;
    }
    const uniqueDatesWithIds=(arrOfDates, arrOfDatesWithIds)=>{
        // console.log('arrOfDates=', arrOfDates);
        // console.log('arrOfDatesWithIds=', arrOfDatesWithIds);
        // now>date
        // now<=date
        
        let resultofDates = [];
        let result = [];

        for (let index = 0; index < arrOfDates.length; index++) {
          // console.log('date=', arrOfDates[index]);
          // console.log('now=', now);
          // console.log('new Date(now)=', new Date(now));
          // console.log('new Date(arrOfDates[index])=', new Date(arrOfDates[index]));
          // console.log('arrOfDates[index]>=now=', arrOfDates[index]>=now);
          let arrOfDatesIndexForComparision = format(new Date(arrOfDates[index]), 'yyyy-MM-dd');
          // console.log('arrOfDatesIndexForComparision=', arrOfDatesIndexForComparision);
          // console.log('typeof arrOfDatesIndexForComparision=', typeof arrOfDatesIndexForComparision);
          let nowForComparision = format(new Date(now), 'yyyy-MM-dd');;
          // console.log('nowForComparision=', nowForComparision);
          // console.log('typeof nowForComparision=', typeof nowForComparision);
          if (arrOfDatesIndexForComparision>=nowForComparision) {
            // console.log(now, arrOfDates[index]);
            // console.log('new Date(now)=', new Date(now));
            // console.log('new Date(arrOfDates[index])=', new Date(arrOfDates[index]));
            if (!resultofDates.includes(arrOfDates[index])) {
              resultofDates.push(arrOfDates[index]);
              result.push({date: arrOfDates[index], tasks: arrOfDatesWithIds.reduce(
                (acc, task) => {
                    // console.log('acc=', acc);
                    // console.log('typeof acc=', typeof acc);
                    // console.log('task=', task);
                    // console.log('typeof task=', typeof task);
                    // console.log('task.date===date=', task.date===date);
                    if (task.dateAsNumber!==arrOfDates[index]) {
                        // console.log('acc after check=', acc);
                        return acc};
                    if (task.dateAsNumber===arrOfDates[index]) {
                        // console.log('task=', task);
                        const taskToResult =  tasks.filter(elem => elem._id===task.taskId)
                        acc.push(...taskToResult);
                        // console.log('acc after push=', acc);
                        return acc};
                }, []
  
            )});
          }}
          
         
          
        }
        // console.log('result=', result);
        return result;
    }



    const uniqDates = unique(sortedAllDates);
    const datesWithIds = uniqueDatesWithIds(sortedAllDates, sortedallDatesWithIds);

    // console.log('uniqDates=', uniqDates);
    // console.log('typeof uniqDates=', typeof uniqDates);  
    // console.log('datesWithIds=', datesWithIds);
    // console.log('typeof datesWithIds=', typeof datesWithIds); 
    // console.log('now=', now);
    // console.log('typeof now=', typeof now);
    // const today = new Date();
    // console.log('today=', today);
    // console.log('datesForTasksList=', datesForTasksList);

    

    return datesWithIds;
}

export default refactoredTaskList;
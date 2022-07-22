// Utility functions for manipulating Date objects

export function addDays(date, numberOfDays){
    let newDate = new Date();
    // Can't do date.getDate() + numberOfDays because that leads to
    // overflow issues whenever the month changes
    newDate.setTime(date.getTime() + daysToMiliseconds(numberOfDays))
    return (newDate);
  }

export function addWeeks(date, numberOfWeeks){
let newDate = new Date();
newDate.setDate(date.getDate() + 7 * numberOfWeeks);

return (newDate);
}
function daysToMiliseconds(noOfDays){
    return noOfDays * 86400000;
}
export function getSundayBefore(date){
    let newDate = new Date();
    // Can't do date.getDate() - date.getDay() because that leads to
    // overflow issues whenever the month changes
    newDate.setTime(date.getTime() - daysToMiliseconds(date.getDay()))
    return (newDate)
}

export function isEvenMonth(date){
    // Months start at 0. (So January is 0)
    // The comparator used is !== instead of === to get a more intuitive behavior
    return (date.getMonth() % 2 !== 0);
}

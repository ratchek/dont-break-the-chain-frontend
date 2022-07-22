// Utility functions for handling calendar objects

export function isDateSuccess(cal, date){
    let year = date.year
    let month = date.month
    let day = date.day
    if (year in cal){
        if (month in cal[year]){
            if (day in cal[year][month]){
                return True;
            }
        }
    }                
    return False;
}

export function changeDateSuccess(cal, date){
    let year = date.year
    let month = date.month
    let day = date.day
    // TODO
    // This should probably be checking if this was the last day
    // in the month/year and then cleaning those up as well
    // but it's not a big issue and I'll leave it for now
    if (isDateSuccess(cal, date)){
        cal[year][month].delete(day)
    }
    else{
        if (! year in cal) cal[year] = {};
        if (! month in cal[year]) cal[year][month] = new Set();
        cal[year][month].add(day)
    }
    return cal;
}

// Utility functions for handling calendar objects

export function isDateSuccess(cal, date){
    let year = date.getFullYear();
    // Having months zero-indexed bugs me for some reason.
    let month = date.getMonth()+1;
    let day = date.getDate();
    if (year in cal){
        if (month in cal[year]){
            if (cal[year][month].has(day)){
                return true;
            }
        }
    }                
    return false;
}

export function changeDateSuccess(cal, date){
    console.log("heyoo")
    let year = date.getFullYear();
    // Having months zero-indexed bugs me for some reason.
    let month = date.getMonth()+1;
    let day = date.getDate();
    const modified_cal = Object.assign({}, cal)
    console.log(cal)
    console.log(modified_cal)
    // TODO
    // This should probably be checking if this was the last day
    // in the month/year and then cleaning those up as well
    // but it's not a big issue and I'll leave it for now
    if (isDateSuccess(modified_cal, date)){
        modified_cal[year][month].delete(day)
        console.log("I shouldn;t be here");
    }
    else{
        if (!( year in modified_cal)) modified_cal[year] = {};
        if (! (month in modified_cal[year])) modified_cal[year][month] = new Set();
        modified_cal[year][month].add(day)
    }
    return modified_cal;
}

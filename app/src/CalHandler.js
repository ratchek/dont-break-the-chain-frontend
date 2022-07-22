// Utility functions for handling calendar objects

import {useState} from 'react';

export function isDateSuccess(cal, date){
    let year = date.year
    let month = date.month
    let day = date.day
    if (year in cal){
        if (month in cal[year]){
            if (day in cal[year][month]){
                return true;
            }
        }
    }                
    return false;
}
// I know the "React" way of doing things is to copy the whole state
// in order to force a rerender, but my cal might get quite big, and
// I don't want to keep recopying it, because I feel that might take a lot of time
// So here's a workaround
function useForceRerender(){
    const [value, setValue] = useState(0); 
    setValue(value+1);
}

export function changeDateSuccess(cal, date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const modified_cal = Object.assign({}, cal)
    console.log(`Hey, with ${date}`)
    console.log("original")
    console.log(cal)
    console.log("modified")
    console.log(modified_cal)
    console.log(year);
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

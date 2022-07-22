import { isEvenMonth } from "./TimeTravel";
import {useState} from 'react';

const Day = (props) => {
  const isToday = (date) => { return date.toDateString() === new Date().toDateString();}
  let classes = "";
  classes += " day";
  classes += isEvenMonth(props.date) ? " even-month" : " odd-month";
  classes += props.isSuccess ? " success" : "";

  return (
    <div 
      className= {classes}
      id={isToday(props.date) ?"today": null}
      key = {props.date.getDate()}
      onClick = {props.clickHandler}
    > 
        {props.date.getMonth() + " / "  + props.date.getDate()} 
    </div>
  );
}

export default Day;

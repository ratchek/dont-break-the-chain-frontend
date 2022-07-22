import { isEvenMonth } from "./TimeTravel";

const Day = (props) => {
  const isToday = (date) => { return date.toDateString() === new Date().toDateString();}
  let classes = "";
  classes += " day";
  classes += isEvenMonth(props.date) ? " even-month" : " odd-month";
  classes += props.isSuccess ? " success" : "";
  const onClick = () => {
    props.onClick(props.date)
  }
  return (
    <div 
      className= {classes}
      id={isToday(props.date) ?"today": null}
      key = {props.date.getDate()}
      onClick = {onClick}
    > 
        {props.date.getMonth() + " / "  + props.date.getDate()} 
    </div>
  );
}

export default Day;

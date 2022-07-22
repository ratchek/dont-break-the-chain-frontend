import Day from './Day';
import { addDays, getSundayBefore } from './TimeTravel';

const Week = (props) => {

  const range = [0,1,2,3,4,5,6]
  let sunday = getSundayBefore(props.date)
  return (
    <div className="week"> 
      {range.map((index) => {
        return (
          <Day 
            key = {index.toString()}
            sunday = {sunday}
            date={ addDays(sunday, index) }
            onClick = {props.onClick}
            checkSuccess = {props.checkSuccess}
          />
        )  
      })}
    </div>
  );
}

export default Week;
